import { ReactNode } from 'react';
import imgRectangle from "figma:asset/0523a33c88a0694c15d8a7dd2964919dd4481b7d.png";

interface DashboardLayoutProps {
  children: ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
  userName?: string;
  onSignOut?: () => void;
}

export function DashboardLayout({ children, currentPage, onNavigate, userName, onSignOut }: DashboardLayoutProps) {
  const navItems = [
    { id: 'home', label: 'home' },
    { id: 'chat', label: 'chat' },
    { id: 'roadmap', label: 'roadmap' },
    { id: 'explore', label: 'explore' },
    { id: 'companies', label: 'companies' },
  ];

  const bottomItems = [
    { id: 'settings', label: 'settings' },
    { id: 'mission', label: 'mission' },
  ];

  return (
    <div className="bg-white min-h-screen flex">
      {/* Sidebar - Fixed */}
      <div className="bg-[#FFF5F0] w-[130px] flex-shrink-0 fixed left-0 top-0 bottom-0 border-r border-[#FFD4C4]/30 flex flex-col">
        {/* Three dots at top */}
        <div className="flex gap-[8px] p-[18px]">
          <div className="size-[6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
              <circle cx="3.5" cy="3.5" fill="#FFD4C4" r="3.5" />
            </svg>
          </div>
          <div className="size-[6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
              <circle cx="3.5" cy="3.5" fill="#FFD4C4" r="3.5" />
            </svg>
          </div>
          <div className="size-[6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
              <circle cx="3.5" cy="3.5" fill="#FFD4C4" r="3.5" />
            </svg>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full text-left px-[16px] py-[14px] font-['Manrope',_sans-serif] text-[12px] tracking-[0.1px] transition-all rounded-[10px] mx-[8px] ${
                currentPage === item.id 
                  ? 'text-black bg-gradient-to-r from-[#FFD4C4]/40 to-[#FFC1B6]/40 border-l-2 border-[#FFC1B6]' 
                  : 'text-black/50 hover:text-black hover:bg-[#FFD4C4]/15'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Bottom Items */}
        <div className="mb-[24px]">
          {bottomItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full text-left px-[16px] py-[10px] font-['Manrope',_sans-serif] text-[12px] tracking-[0.1px] transition-all rounded-[10px] mx-[8px] ${
                currentPage === item.id 
                  ? 'text-black bg-gradient-to-r from-[#FFD4C4]/40 to-[#FFC1B6]/40 border-l-2 border-[#FFC1B6]' 
                  : 'text-black/50 hover:text-black hover:bg-[#FFD4C4]/15'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Spacer for fixed sidebar */}
      <div className="w-[130px] flex-shrink-0"></div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header - Reduced padding */}
        <div className="flex items-center justify-end px-[28px] py-[10px] border-b border-black/5">
          {/* Sign Out Button */}
          {onSignOut && (
            <button
              onClick={onSignOut}
              className="px-[10px] py-[4px] rounded-[12px] bg-gradient-to-r from-[#FFD4C4] to-[#FFC1B6] hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              <span className="font-['Manrope',_sans-serif] text-[10px] text-white">
                sign out
              </span>
            </button>
          )}
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
