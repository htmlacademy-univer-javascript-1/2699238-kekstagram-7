const names = [
  'Паша',
  'Саня',
  'Яша',
  'Гриша',
  'Петькинс',
  'Вовчик',
  'Катя',
  'Миша',
  'Маша'
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'

];

const descriptions = [
  'Прекрасный день для фотографирования!',
  'Сегодня солнечно и тепло.',
  'Вид на горы за окном.',
  'Уютная кофейня с хорошим кофе.',
  'Природа в полной краске.',
  'Немного загадочности ещё никому не повредило.',
  'Выходной удался на славу.',
  'Зомби, манипуляции, постправда.',
  'Вечерний город в огнях.',
  'Путешествие в неизведанное.',
  'Моменты счастья и радости.',
  'Тишина и спокойствие на природе.',
  'Вдохновение в каждом кадре.',
  'Солнечные лучи сквозь облака.',
  'Городские улицы ночью.',
  'Красота заката на пляже.',
  'Зимняя сказка в лесу.',
  'Романтика старого города.',
  'Волшебство осеннего леса.'
];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const objectUsedIds = [];
const objectUsedUrls = [];
const objectUsedCommentsIds = [];

const getUniqueId = function(usedIds, range) {
  let id = getRandomNumber(1, range);
  while (usedIds.includes(id)) {
    id = getRandomNumber(1, range);
  }

  usedIds.push(id);

  return id;
};

const getRandomMessage = function() {
  const messageCount = getRandomNumber(1, 2);
  const messagesArray = [];

  while (messagesArray.length < messageCount) {
    const message = getRandomArrayElement(messages);
    if (!messagesArray.includes(message)) {
      messagesArray.push(message);
    }
  }

  return messagesArray.join(' ');
};

const createComment = function() {
  return {
    id: getUniqueId(objectUsedCommentsIds, 10000000),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomMessage(),
    name: getRandomArrayElement(names)
  };
};

const createPhoto = function() {
  return {
    id: getUniqueId(objectUsedIds, 25),
    url: `photos/${getUniqueId(objectUsedUrls, 25)}.jpg`,
    description: getRandomArrayElement(descriptions),
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: getRandomNumber(0, 30)}, createComment)
  };
};

const createObjects = function() {
  return Array.from({length: 25}, createPhoto);
};

export { createObjects };
