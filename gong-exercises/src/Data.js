class Data {
    static getData() {
        return Object.freeze(Data.examplePosts);
    }
}

export default Data;

Data.examplePosts = [
    {
        id: "56756733",
        author: "Chen Feldman",
        text: "Use setState to update it. Remember, state change = re-render!",
        authorImage: "img/chen.jfif",
        like: false
    },
    {
        id: "15675751",
        author: "Eilon Reshef",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        authorImage: "img/eilon.jfif",
        like: false
    },
    {
        id: "256757572",
        author: "Bill Gates",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        authorImage: "img/bill.jpg",
        like: false
    },
    {
        id: "45675675674",
        author: "Jacob Eckel",
        text: "bla bla bla",
        authorImage: "img/jacob.jpeg",
        like: false
    },
    {
        id: "4545646575674",
        author: "Jacob Eckel",
        text: "tur la la",
        authorImage: "img/jacob.jpeg",
        like: false
    }
];


