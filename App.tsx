import React, { useState } from 'react';
import { Map, Calendar, Coffee, ClipboardList, Info, Menu, X, CloudFog } from 'lucide-react';
import Timeline from './components/Timeline';
import { TransportChart, BudgetChart } from './components/Charts';
import FoodGallery from './components/FoodGallery';
import { itineraryData } from './constants';

enum Tab {
  OVERVIEW = 'overview',
  ITINERARY = 'itinerary',
  FOOD = 'food',
  PREP = 'prep',
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.OVERVIEW);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: Tab.OVERVIEW, label: '行程總覽 & 交通', icon: Info },
    { id: Tab.ITINERARY, label: '每日行程 (Timeline)', icon: Calendar },
    { id: Tab.FOOD, label: '美食地圖', icon: Coffee },
    { id: Tab.PREP, label: '行前準備', icon: ClipboardList },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <CloudFog className="h-8 w-8 text-indigo-600 mr-2" />
              <span className="font-bold text-xl tracking-tight text-slate-900">Genting 2027</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                    activeTab === item.id
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-500 hover:text-slate-700 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="pt-2 pb-3 space-y-1 px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left pl-3 pr-4 py-3 border-l-4 text-base font-medium ${
                    activeTab === item.id
                      ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                      : 'border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <span className="flex items-center">
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow bg-slate-50">
        
        {/* Header Section */}
        <div className="bg-indigo-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/1200/400?grayscale')] bg-cover bg-center" />
          <div className="relative max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              雲頂高原 3天2夜 新春之旅
            </h1>
            <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
              2027 農曆新年 · 朋友歡聚 · 娛樂美食
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* OVERVIEW TAB */}
          {activeTab === Tab.OVERVIEW && (
            <div className="space-y-8 animate-fade-in">
              <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <Info className="w-6 h-6 mr-2 text-indigo-500" />
                  旅程概況
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: '日期', value: '2027 農曆新年' },
                    { label: '天數', value: '3 天 2 夜' },
                    { label: '預算', value: '< 5000 TWD/日' },
                    { label: '交通', value: '大眾運輸 (巴士/纜車)' },
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold">{stat.label}</div>
                      <div className="text-lg font-bold text-slate-800 mt-1">{stat.value}</div>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                     <TransportChart />
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <BudgetChart />
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* ITINERARY TAB */}
          {activeTab === Tab.ITINERARY && (
            <div className="space-y-12 animate-fade-in">
              {itineraryData.map((dayPlan) => (
                <section key={dayPlan.day} className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-slate-100">
                    <div>
                      <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-2">
                        DAY {dayPlan.day}
                      </span>
                      <h2 className="text-2xl font-bold text-slate-800">{dayPlan.title}</h2>
                    </div>
                    <div className="text-slate-500 mt-2 md:mt-0 font-medium">
                      {dayPlan.date}
                    </div>
                  </div>
                  <Timeline items={dayPlan.items} />
                </section>
              ))}
            </div>
          )}

          {/* FOOD TAB */}
          {activeTab === Tab.FOOD && (
            <div className="animate-fade-in">
               <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-100 min-h-[600px]">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">雲頂美食地圖</h2>
                  <p className="text-slate-500">從奢華餐廳到道地街頭小吃，滿足你的味蕾</p>
                </div>
                <FoodGallery />
              </section>
            </div>
          )}

          {/* PREP TAB */}
          {activeTab === Tab.PREP && (
            <div className="animate-fade-in max-w-4xl mx-auto">
              <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <ClipboardList className="w-6 h-6 mr-2 text-indigo-500" />
                  行前準備清單
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r">
                    <h3 className="font-bold text-amber-800 mb-2">⚠️ 農曆新年特別提醒</h3>
                    <ul className="list-disc list-inside text-amber-700 space-y-1 text-sm">
                      <li>人潮非常多，務必提前預訂巴士票和飯店。</li>
                      <li>餐廳建議避開尖峰用餐時間。</li>
                      <li>戶外樂園若遇下雨可能會暫停設施。</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-slate-700 mb-3 border-b pb-2">必備證件/物品</h3>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-indigo-600 rounded" /> 護照 (進賭場必備)</li>
                        <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-indigo-600 rounded" /> 馬幣現金 (小吃多收現)</li>
                        <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-indigo-600 rounded" /> 薄外套 (雲頂常年 15-25度)</li>
                        <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-indigo-600 rounded" /> 雨具/摺疊傘</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-700 mb-3 border-b pb-2">數位準備</h3>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-indigo-600 rounded" /> 下載 Genting SkyWorlds App (預約排隊)</li>
                        <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-indigo-600 rounded" /> 下載 Grab App (備用交通)</li>
                        <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-indigo-600 rounded" /> 預存 Google Maps 離線地圖</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© 2027 Genting Trip Planner. Designed for Friends Trip.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;