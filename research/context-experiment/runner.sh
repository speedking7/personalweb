#!/bin/bash
# $1 = 条件 A/B/C   $2 = 序号。原子写入：先写 .tmp，跑完才 mv 成 .md
c=$1; n=$2
id=$(printf "%02d" $n)
out=/tmp/ctxexp/out/$c/$id.md
[ -s "$out" ] && exit 0
tmp=$(mktemp /tmp/ctxexp/out/$c/.$id.XXXX)
cd /tmp/ctxexp
if timeout 900 claude -p --model sonnet --tools "" < /tmp/ctxexp/prompt_$c.txt > "$tmp" 2>"/tmp/ctxexp/out/$c/$id.err"; then
  if [ -s "$tmp" ]; then mv "$tmp" "$out"; echo "OK $c$id $(wc -c <"$out")"; else rm -f "$tmp"; echo "EMPTY $c$id"; fi
else
  rm -f "$tmp"; echo "FAIL $c$id"
fi
