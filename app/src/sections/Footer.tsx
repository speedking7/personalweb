export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#2a2a2a]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#9ca3af]">
            © 2024 瀛同学. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-[#9ca3af] hover:text-white transition-colors"
            >
              隐私政策
            </a>
            <a
              href="#"
              className="text-sm text-[#9ca3af] hover:text-white transition-colors"
            >
              使用条款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
