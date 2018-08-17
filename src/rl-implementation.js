'use strict';

const RQ = function RQ(maxSize) {
    this.maxSize = maxSize;
    this.size = 0;
    this._root = null;
    this._last = null;
};

module.exports = RQ;

RQ.createNode = (data, next) => {
    next = next || null;
    return {
        data: data,
        next: next
    }
};

RQ.prototype.push = function (data) {
    const node = RQ.createNode(data);

    if (this.size < this.maxSize) {
        if (this._root === null) {
            this._last = this._root = node;
        } else {
            this._last.next = node;
            this._last = node;
        }
        this.size++;
    } else {
        const data = this._root.data;

        this._root = this._root.next;
        this._last.next = node;
        this._last = node;

        return data;
    }
};

RQ.prototype.pop = function () {
    if (this._root === null) {
        throw new Error('Cannot pop from empty queu');
    }

    const data = this._root.data;

    this._root = this._root.next;
    this.size--;

    return data;
};

RQ.prototype.first = function () { return this._root.data; };

RQ.prototype.last = function () { return this._last.data; };
