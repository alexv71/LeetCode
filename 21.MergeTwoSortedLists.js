/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let res = null;
  let cur = null;
  if (l1 == null) {
    if (l2 == null) {
      return null;
    } else {
      return l2;
    }
  }

  if (l2 == null) {
    return l1;
  }

  if (l1.val < l2.val) {
    res = l1;
    cur = l1;
    l1 = l1.next;
  } else {
    res = l2;
    cur = l2;
    l2 = l2.next;
  }

  while(true) {
    if (l1 == null) {
      cur.next = l2;
      break;
    }
    if (l2 == null) {
      cur.next = l1;
      break;
    }
    if (l1.val < l2.val) {
      cur.next = l1;
      cur = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      cur = l2;
      l2 = l2.next;
    }
  }

  return res;
};


var l13 = {
  val: 4,
  next: null
}

var l12 = {
  val: 2,
  next: l13
}

var l11 = {
  val: 1,
  next: l12
}

var l23 = {
  val: 4,
  next: null
}

var l22 = {
  val: 3,
  next: l23
}

var l21 = {
  val: 1,
  next: l22
}

var res = mergeTwoLists(l11, l21);

while (true) {
  console.log(res.val);
  res = res.next;
  if (res == null) {
    break;
  }
}
