import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { newsArticles } from '../../data/news';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Calendar, User, ArrowRight, X } from 'lucide-react';
import type { NewsArticle } from '../../types';

export function NewsSection() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const { ref, isRevealed } = useScrollReveal(0.1);
  
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  return (
    <section
      id="news"
      ref={ref}
      className={`py-24 bg-cream transition-all duration-1000 ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-earth bg-earth/10 px-3.5 py-1.5 rounded-full inline-block">
            {t('nav.news')}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-forest">
            {t('news.title')}
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto font-body text-sm">
            {t('news.subtitle')}
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-cream-dark/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={article.image}
                  alt={isEn ? article.titleEn : article.titleId}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-4 left-4 bg-forest text-earth text-xs font-body font-semibold px-3 py-1 rounded-full border border-earth/20 shadow-md">
                  {article.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  {/* Meta */}
                  <div className="flex items-center space-x-4 text-xs text-charcoal/50 font-body">
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{article.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <User className="h-3.5 w-3.5" />
                      <span>{article.author}</span>
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-display font-bold text-forest group-hover:text-earth transition-colors leading-snug">
                    {isEn ? article.titleEn : article.titleId}
                  </h3>
                  <p className="text-sm font-body text-charcoal/70 leading-relaxed line-clamp-3">
                    {isEn ? article.summaryEn : article.summaryId}
                  </p>
                </div>

                {/* Read Button */}
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center space-x-2 text-sm font-bold text-earth hover:text-earth-dark font-body cursor-pointer w-fit group/btn"
                >
                  <span>{t('news.readMore')}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Overlay / Article Reader */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl relative border border-cream-dark/30 animate-in zoom-in-95 duration-200 my-8">
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 z-10 bg-black/40 hover:bg-forest text-cream p-2 rounded-full transition cursor-pointer"
              aria-label="Close reader"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header Image */}
            <div className="h-64 overflow-hidden relative">
              <img
                src={selectedArticle.image}
                alt={isEn ? selectedArticle.titleEn : selectedArticle.titleId}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <span className="bg-earth text-forest text-[10px] font-body font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-2 inline-block">
                  {selectedArticle.category}
                </span>
                <h3 className="text-2xl font-display font-bold leading-tight">
                  {isEn ? selectedArticle.titleEn : selectedArticle.titleId}
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              {/* Meta */}
              <div className="flex items-center space-x-4 text-xs text-charcoal/50 font-body border-b border-cream-dark/20 pb-4">
                <span className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4 text-earth" />
                  <span>{selectedArticle.date}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <User className="h-4 w-4 text-earth" />
                  <span>{t('news.author')} {selectedArticle.author}</span>
                </span>
              </div>

              {/* Paragraphs */}
              <div className="font-body text-charcoal/80 text-base leading-relaxed space-y-4">
                <p className="font-semibold text-forest text-lg font-display">
                  {isEn ? selectedArticle.summaryEn : selectedArticle.summaryId}
                </p>
                <p>
                  {isEn ? selectedArticle.contentEn : selectedArticle.contentId}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
