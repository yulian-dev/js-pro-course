// реализуйте функцию по созданию счётчика

function createCounter(initialValue = 0) {
    let count = initialValue;

    return {
        showValue: () => {
            return count;
        },

        increment: function (value = 1) {
            count += value;
            return this;
        },

        decrement: function (value = 1) {
            count -= value;
            return this;
        },

        discard: function () {
            count = initialValue;
            return this;
        }
    }
}
