/**
 * The PriorityQeueu class
 */

//优先排序队列。
var PriorityQueue = function(comparator){
  this.init(comparator);
}

var pro = PriorityQueue.prototype;

//初始化，添加比较规则，队列数组，末位点
pro.init = function(comparator){
  this._comparator = typeof(comparator)=='function'?comparator:this._defaultComparator;
  
  this._queue = [];
  this._tailPos = 0;
}

/**
 * Return the size of the pirority queue
 * @return PirorityQueue size
 */
//队列大小就是末位点
pro.size = function(){
  return this._tailPos;
};
  
/**
 * Insert an element to the queue
 * @param element The element to insert
 */

//添加对象到队列。
pro.offer = function(element){
  var queue = this._queue;
  var compare = this._comparator;
  
  queue[this._tailPos++] = element;   //存入对象到队列组
  
  var pos = this._tailPos-1;
  
  while(pos > 0){
    var parentPos = (pos%2==0)?(pos/2-1):(pos-1)/2;
    //如果比较器返回结果为true，后加入的放前面............................
    if(compare(queue[parentPos], element)){
      queue[pos] = queue[parentPos];
      queue[parentPos] = element;
      
      pos = parentPos;
    }else{
      break;
    }
  }
};
          
/**
 * Get and remove the first element in the queue
 * @return The first element
 */        
pro.pop = function(){
  var queue = this._queue;
  var compare = this._comparator;
  
  if(this._tailPos == 0)
    return null;
  
  
  var headNode = queue[0];
  
  var tail = queue[this._tailPos - 1];

  var pos = 0;
  var left = pos*2 + 1;
  var right = left + 1;
  queue[pos] = tail;
  this._tailPos--;
  
  while(left < this._tailPos){    
    if(right<this._tailPos && compare(queue[left], queue[right]) && compare(queue[pos], queue[right])){
      queue[pos] = queue[right];
      queue[right] = tail;
      
      pos = right;
    }else if(compare(queue[pos],queue[left])){
      queue[pos] = queue[left];
      queue[left] = tail;
      
      pos = left;
    }else{
      break;
    }
    
    left = pos*2 + 1;
    right = left + 1;
  }
  
  return headNode;
};

/**
 * Get but not remove the first element in the queue
 * @return The first element
 */
pro.peek = function(){
  if(this._tailPos == 0)
    return null;
  return this._queue[0];
}

/**
 * The default comparator, implement a simple integer comparator
 * @param a {?} Parameter a.
 * @param b {?} Paramter b.
 * @return {boolean} If a is bigger than b.
 */
pro._defaultComparator = function(a , b){
  return a > b;
}

module.exports = function(comparator){
  return new PriorityQueue(comparator);
}
