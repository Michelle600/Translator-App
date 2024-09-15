const translations = {
    malay: {
      morning: 'pagi',
      night: 'malam',
      luck: 'nasib',
      like: 'suka',
    },
    chinese: {
      morning: '早上好',
      night: '晚安',
      luck: '运气',
      like: '喜欢',
    },
    japanese: {
      morning: '朝',
      night: '夜',
      luck: '運',
      like: 'のように',
    },
    korean: {
      morning: '아침',
      night: '밤',
      luck: '운',
      like: '좋다',
    },
  }

export function translate(language,inputText) {
  return translations [language] [inputText];
}