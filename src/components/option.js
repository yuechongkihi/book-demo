import Mock from "mockjs";
export const bookOptions = [
  {
    value: 1,
    name: "周刊"
  },
  {
    value: 2,
    name: "月刊"
  },
  {
    value: 3,
    name: "半月刊"
  },
  {
    value: 4,
    name: "双月刊"
  },
  {
    value: 5,
    name: "季刊"
  },
  {
    value: 6,
    name: "年刊"
  },
  {
    value: 7,
    name: "早报"
  },
  {
    value: 8,
    name: "日报"
  },
  {
    value: 9,
    name: "晚报"
  },
  {
    value: 10,
    name: "周报"
  },
  {
    value: 11,
    name: "周二报"
  },
  {
    value: 12,
    name: "周三报"
  },
  {
    value: 13,
    name: "周四报"
  },
  {
    value: 14,
    name: "周五报"
  },
  {
    value: 15,
    name: "周六报"
  },
  {
    value: 16,
    name: "周日报"
  },
  {
    value: 17,
    name: "其他报"
  },
  {
    value: 18,
    name: "周二刊"
  },
  {
    value: 1,
    name: "出版社"
  },
  {
    value: 19,
    name: "不定期"
  },
  {
    value: 20,
    name: "年3期"
  },
  {
    value: 21,
    name: "年5期"
  },
  {
    value: 22,
    name: "年7期"
  },
  {
    value: 23,
    name: "年7期"
  },
  {
    value: 24,
    name: "年8期"
  },
  {
    value: 25,
    name: "年9期"
  }
];
export const alphabet = Array.from(new Array(26), (ele, index) => {
  return String.fromCharCode(65 + index);
});

export function getCityOptions() {
  let cityOptions = [];
  for (let i = 0; i < 30; i++) {
    cityOptions.push(Mock.Random.city());
  }
  return cityOptions
}
