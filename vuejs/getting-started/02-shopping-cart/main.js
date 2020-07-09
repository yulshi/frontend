const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: 'Timing Machine',
        date: '2002-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: 'Thinking in Java',
        date: '2006-5',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: 'Professional Python',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: 'Programming Javascript',
        date: '2016-5',
        price: 143.00,
        count: 1
      }
    ]
  },
  methods: {
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    remove(index) {
      this.books.splice(index, 1);
    }
  },
  computed: {
    totalPrice() {
      return this.books.map(book => book.count * book.price)
          .reduce((prev, curr) => prev + curr);
    }
  },
  filters: {
    showPrice(price) {
      return '¥' + price.toFixed(2);
    }
  }
});