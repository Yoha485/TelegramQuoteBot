const urls = [
  "https://citaty.info/rating/best?page=0",
  "https://citaty.info/rating/best?page=1",
  "https://citaty.info/rating/best?page=2",
  "https://citaty.info/rating/best?page=3",
  "https://citaty.info/rating/best?page=4",
  "https://citaty.info/rating/best?page=5",
  "https://citaty.info/rating/best?page=6",

  "https://citaty.info/category/citaty-so-smyslom?page=0",
  "https://citaty.info/category/citaty-so-smyslom?page=1",
  "https://citaty.info/category/citaty-so-smyslom?page=2",
  "https://citaty.info/category/citaty-so-smyslom?page=3",
  "https://citaty.info/category/citaty-so-smyslom?page=4",
  "https://citaty.info/category/citaty-so-smyslom?page=5",
  "https://citaty.info/category/citaty-so-smyslom?page=6",
  "https://citaty.info/category/citaty-so-smyslom?page=7",
  "https://citaty.info/category/citaty-so-smyslom?page=8",
  "https://citaty.info/category/citaty-so-smyslom?page=9",
  "https://citaty.info/category/citaty-so-smyslom?page=11",
  "https://citaty.info/category/citaty-so-smyslom?page=12",
  "https://citaty.info/category/citaty-so-smyslom?page=13",
  "https://citaty.info/category/citaty-so-smyslom?page=14",
  "https://citaty.info/category/citaty-so-smyslom?page=15",
  "https://citaty.info/category/citaty-so-smyslom?page=16",
  "https://citaty.info/category/citaty-so-smyslom?page=17",
  "https://citaty.info/category/citaty-so-smyslom?page=18",
  "https://citaty.info/category/citaty-so-smyslom?page=19",
  "https://citaty.info/category/citaty-so-smyslom?page=20",
  "https://citaty.info/category/citaty-so-smyslom?page=21",
  "https://citaty.info/category/citaty-so-smyslom?page=22",
  "https://citaty.info/category/citaty-so-smyslom?page=23",
  "https://citaty.info/category/citaty-so-smyslom?page=24",
  "https://citaty.info/category/citaty-so-smyslom?page=25",
  "https://citaty.info/category/citaty-so-smyslom?page=26",
  "https://citaty.info/category/citaty-so-smyslom?page=27",
  "https://citaty.info/category/citaty-so-smyslom?page=28",
  "https://citaty.info/category/citaty-so-smyslom?page=29",
  "https://citaty.info/category/citaty-so-smyslom?page=30",

  "https://citaty.info/topic/zhizn?page=0",
  "https://citaty.info/topic/zhizn?page=1",
  "https://citaty.info/topic/zhizn?page=2",
  "https://citaty.info/topic/zhizn?page=3",
  "https://citaty.info/topic/zhizn?page=4",
  "https://citaty.info/topic/zhizn?page=5",
  "https://citaty.info/topic/zhizn?page=6",
  "https://citaty.info/topic/zhizn?page=7",
  "https://citaty.info/topic/zhizn?page=8",
  "https://citaty.info/topic/zhizn?page=9",
  "https://citaty.info/topic/zhizn?page=11",
  "https://citaty.info/topic/zhizn?page=12",
  "https://citaty.info/topic/zhizn?page=13",
  "https://citaty.info/topic/zhizn?page=14",
  "https://citaty.info/topic/zhizn?page=15",
  "https://citaty.info/topic/zhizn?page=16",
  "https://citaty.info/topic/zhizn?page=17",
  "https://citaty.info/topic/zhizn?page=18",
  "https://citaty.info/topic/zhizn?page=19",
  "https://citaty.info/topic/zhizn?page=20",
  "https://citaty.info/topic/zhizn?page=21",
  "https://citaty.info/topic/zhizn?page=22",
  "https://citaty.info/topic/zhizn?page=23",
  "https://citaty.info/topic/zhizn?page=24",
  "https://citaty.info/topic/zhizn?page=25",
  "https://citaty.info/topic/zhizn?page=26",
  "https://citaty.info/topic/zhizn?page=27",
  "https://citaty.info/topic/zhizn?page=28",
  "https://citaty.info/topic/zhizn?page=29",
  "https://citaty.info/topic/zhizn?page=30",

  "https://citaty.info/category/zhiznennye-citaty?page=0",
  "https://citaty.info/category/zhiznennye-citaty?page=1",
  "https://citaty.info/category/zhiznennye-citaty?page=2",
  "https://citaty.info/category/zhiznennye-citaty?page=3",
  "https://citaty.info/category/zhiznennye-citaty?page=4",
  "https://citaty.info/category/zhiznennye-citaty?page=5",
  "https://citaty.info/category/zhiznennye-citaty?page=6",
  "https://citaty.info/category/zhiznennye-citaty?page=7",
  "https://citaty.info/category/zhiznennye-citaty?page=8",
  "https://citaty.info/category/zhiznennye-citaty?page=9",
  "https://citaty.info/category/zhiznennye-citaty?page=11",
  "https://citaty.info/category/zhiznennye-citaty?page=12",
  "https://citaty.info/category/zhiznennye-citaty?page=13",
  "https://citaty.info/category/zhiznennye-citaty?page=14",
  "https://citaty.info/category/zhiznennye-citaty?page=15",
  "https://citaty.info/category/zhiznennye-citaty?page=16",
  "https://citaty.info/category/zhiznennye-citaty?page=17",
  "https://citaty.info/category/zhiznennye-citaty?page=18",
  "https://citaty.info/category/zhiznennye-citaty?page=19",
  "https://citaty.info/category/zhiznennye-citaty?page=20",
  "https://citaty.info/category/zhiznennye-citaty?page=21",
  "https://citaty.info/category/zhiznennye-citaty?page=22",
  "https://citaty.info/category/zhiznennye-citaty?page=23",
  "https://citaty.info/category/zhiznennye-citaty?page=24",
  "https://citaty.info/category/zhiznennye-citaty?page=25",
  "https://citaty.info/category/zhiznennye-citaty?page=26",
  "https://citaty.info/category/zhiznennye-citaty?page=27",
  "https://citaty.info/category/zhiznennye-citaty?page=28",
  "https://citaty.info/category/zhiznennye-citaty?page=29",
  "https://citaty.info/category/zhiznennye-citaty?page=30",

  "https://citaty.info/topic/lyubov?page=0",
  "https://citaty.info/topic/lyubov?page=1",
  "https://citaty.info/topic/lyubov?page=2",
  "https://citaty.info/topic/lyubov?page=3",
  "https://citaty.info/topic/lyubov?page=4",
  "https://citaty.info/topic/lyubov?page=5",
  "https://citaty.info/topic/lyubov?page=6",
  "https://citaty.info/topic/lyubov?page=7",
  "https://citaty.info/topic/lyubov?page=8",
  "https://citaty.info/topic/lyubov?page=9",
  "https://citaty.info/topic/lyubov?page=11",
  "https://citaty.info/topic/lyubov?page=12",
  "https://citaty.info/topic/lyubov?page=13",
  "https://citaty.info/topic/lyubov?page=14",
  "https://citaty.info/topic/lyubov?page=15",
  "https://citaty.info/topic/lyubov?page=16",
  "https://citaty.info/topic/lyubov?page=17",
  "https://citaty.info/topic/lyubov?page=18",
  "https://citaty.info/topic/lyubov?page=19",
  "https://citaty.info/topic/lyubov?page=20",
  "https://citaty.info/topic/lyubov?page=21",
  "https://citaty.info/topic/lyubov?page=22",
  "https://citaty.info/topic/lyubov?page=23",
  "https://citaty.info/topic/lyubov?page=24",
  "https://citaty.info/topic/lyubov?page=25",
  "https://citaty.info/topic/lyubov?page=26",
  "https://citaty.info/topic/lyubov?page=27",
  "https://citaty.info/topic/lyubov?page=28",
  "https://citaty.info/topic/lyubov?page=29",
  "https://citaty.info/topic/lyubov?page=30",

  "https://citaty.info/topic/schaste?page=0",
  "https://citaty.info/topic/schaste?page=1",
  "https://citaty.info/topic/schaste?page=2",
  "https://citaty.info/topic/schaste?page=3",
  "https://citaty.info/topic/schaste?page=4",
  "https://citaty.info/topic/schaste?page=5",
  "https://citaty.info/topic/schaste?page=6",
  "https://citaty.info/topic/schaste?page=7",
  "https://citaty.info/topic/schaste?page=8",
  "https://citaty.info/topic/schaste?page=9",
  "https://citaty.info/topic/schaste?page=11",
  "https://citaty.info/topic/schaste?page=12",
  "https://citaty.info/topic/schaste?page=13",
  "https://citaty.info/topic/schaste?page=14",
  "https://citaty.info/topic/schaste?page=15",
  "https://citaty.info/topic/schaste?page=16",
  "https://citaty.info/topic/schaste?page=17",
  "https://citaty.info/topic/schaste?page=18",
  "https://citaty.info/topic/schaste?page=19",
  "https://citaty.info/topic/schaste?page=20",
  "https://citaty.info/topic/schaste?page=21",
  "https://citaty.info/topic/schaste?page=22",
  "https://citaty.info/topic/schaste?page=23",
  "https://citaty.info/topic/schaste?page=24",
  "https://citaty.info/topic/schaste?page=25",
  "https://citaty.info/topic/schaste?page=26",
  "https://citaty.info/topic/schaste?page=27",
  "https://citaty.info/topic/schaste?page=28",
  "https://citaty.info/topic/schaste?page=29",
  "https://citaty.info/topic/schaste?page=30",

  "https://citaty.info/topic/druzya-druzhba?page=0",
  "https://citaty.info/topic/druzya-druzhba?page=1",
  "https://citaty.info/topic/druzya-druzhba?page=2",
  "https://citaty.info/topic/druzya-druzhba?page=3",
  "https://citaty.info/topic/druzya-druzhba?page=4",
  "https://citaty.info/topic/druzya-druzhba?page=5",
  "https://citaty.info/topic/druzya-druzhba?page=6",
  "https://citaty.info/topic/druzya-druzhba?page=7",
  "https://citaty.info/topic/druzya-druzhba?page=8",
  "https://citaty.info/topic/druzya-druzhba?page=9",
  "https://citaty.info/topic/druzya-druzhba?page=11",
  "https://citaty.info/topic/druzya-druzhba?page=12",
  "https://citaty.info/topic/druzya-druzhba?page=13",
  "https://citaty.info/topic/druzya-druzhba?page=14",
  "https://citaty.info/topic/druzya-druzhba?page=15",
  "https://citaty.info/topic/druzya-druzhba?page=16",
  "https://citaty.info/topic/druzya-druzhba?page=17",
  "https://citaty.info/topic/druzya-druzhba?page=18",
  "https://citaty.info/topic/druzya-druzhba?page=19",
  "https://citaty.info/topic/druzya-druzhba?page=20",
  "https://citaty.info/topic/druzya-druzhba?page=21",
  "https://citaty.info/topic/druzya-druzhba?page=22",
  "https://citaty.info/topic/druzya-druzhba?page=23",
  "https://citaty.info/topic/druzya-druzhba?page=24",
  "https://citaty.info/topic/druzya-druzhba?page=25",
  "https://citaty.info/topic/druzya-druzhba?page=26",
  "https://citaty.info/topic/druzya-druzhba?page=27",
  "https://citaty.info/topic/druzya-druzhba?page=28",
  "https://citaty.info/topic/druzya-druzhba?page=29",
  "https://citaty.info/topic/druzya-druzhba?page=30",

  "https://citaty.info/topic/vremya?page=0",
  "https://citaty.info/topic/vremya?page=1",
  "https://citaty.info/topic/vremya?page=2",
  "https://citaty.info/topic/vremya?page=3",
  "https://citaty.info/topic/vremya?page=4",
  "https://citaty.info/topic/vremya?page=5",
  "https://citaty.info/topic/vremya?page=6",
  "https://citaty.info/topic/vremya?page=7",
  "https://citaty.info/topic/vremya?page=8",
  "https://citaty.info/topic/vremya?page=9",
  "https://citaty.info/topic/vremya?page=11",
  "https://citaty.info/topic/vremya?page=12",
  "https://citaty.info/topic/vremya?page=13",
  "https://citaty.info/topic/vremya?page=14",
  "https://citaty.info/topic/vremya?page=15",
  "https://citaty.info/topic/vremya?page=16",
  "https://citaty.info/topic/vremya?page=17",
  "https://citaty.info/topic/vremya?page=18",
  "https://citaty.info/topic/vremya?page=19",
  "https://citaty.info/topic/vremya?page=20",
  "https://citaty.info/topic/vremya?page=21",
  "https://citaty.info/topic/vremya?page=22",
  "https://citaty.info/topic/vremya?page=23",
  "https://citaty.info/topic/vremya?page=24",
  "https://citaty.info/topic/vremya?page=25",
  "https://citaty.info/topic/vremya?page=26",
  "https://citaty.info/topic/vremya?page=27",
  "https://citaty.info/topic/vremya?page=28",
  "https://citaty.info/topic/vremya?page=29",
  "https://citaty.info/topic/vremya?page=30",

  "https://citaty.info/search/site/%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D1%82%D1%8C?page=0",
  "https://citaty.info/search/site/%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D1%82%D1%8C?page=1",
  "https://citaty.info/search/site/%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D1%82%D1%8C?page=2",
  "https://citaty.info/search/site/%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D1%82%D1%8C?page=3",
  "https://citaty.info/search/site/%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D1%82%D1%8C?page=4",
  "https://citaty.info/search/site/%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D1%82%D1%8C?page=5",
  "https://citaty.info/search/site/%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D1%82%D1%8C?page=6",
  "https://citaty.info/search/site/%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D1%82%D1%8C?page=7",
  "https://citaty.info/search/site/%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D1%82%D1%8C?page=8",
  "https://citaty.info/search/site/%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D1%82%D1%8C?page=9",

  "https://citaty.info/search/site/%D1%81%D0%BC%D0%B5%D0%BB%D0%BE%D1%81%D1%82%D1%8C?page=0",
  "https://citaty.info/search/site/%D1%81%D0%BC%D0%B5%D0%BB%D0%BE%D1%81%D1%82%D1%8C?page=1",
  "https://citaty.info/search/site/%D1%81%D0%BC%D0%B5%D0%BB%D0%BE%D1%81%D1%82%D1%8C?page=2",
  "https://citaty.info/search/site/%D1%81%D0%BC%D0%B5%D0%BB%D0%BE%D1%81%D1%82%D1%8C?page=3",
  "https://citaty.info/search/site/%D1%81%D0%BC%D0%B5%D0%BB%D0%BE%D1%81%D1%82%D1%8C?page=4",
  "https://citaty.info/search/site/%D1%81%D0%BC%D0%B5%D0%BB%D0%BE%D1%81%D1%82%D1%8C?page=5",
  "https://citaty.info/search/site/%D1%81%D0%BC%D0%B5%D0%BB%D0%BE%D1%81%D1%82%D1%8C?page=6",
  "https://citaty.info/search/site/%D1%81%D0%BC%D0%B5%D0%BB%D0%BE%D1%81%D1%82%D1%8C?page=7",
];

export default urls;
