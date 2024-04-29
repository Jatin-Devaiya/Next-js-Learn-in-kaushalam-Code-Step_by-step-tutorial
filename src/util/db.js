const { username, password } = process.env;
export const connectionSrt = `mongodb+srv://jatindevaiya:${password}@cluster0.kjgiwx9.mongodb.net/product_db?retryWrites=true&w=majority&appName=Cluster0`

// export const connectionSrt = `mongodb+srv://jatindevaiya:Googletest@cluster0.smuvz5a.mongodb.net/test_db?retryWrites=true&w=majority&appName=Cluster0`

export const user = [
  {
    id: 1,
    name: "jatin",
    age: "20",
    email: "jatin@gmail.com",
  },
  {
    id: 2,
    name: "kag",
    age: "52",
    email: "kag@gmail.com",
  },
  {
    id: 3,
    name: "raghuvir",
    age: "25",
    email: "raghu@gmail.com",
  },
  {
    id: 4,
    name: "hevin",
    age: "2",
    email: "hevin@gmail.com",
  },
];
