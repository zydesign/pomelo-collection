# pomelo-collection
pomelo - collection是node . js中基本数据结构的模块。
该模块提供priorityQueue和queue两种方法，优先队列和排序
##Installation
```
npm install pomelo-collection
```

##How to Use

###Use PriorityQueue
```
	var coll = require('pomelo-collection');
	
	//Use priorityQueue
	var PriorityQueue = coll.priorityQueue;
	
	//a先加入，b后加入，这里是从大到小排列
	//var comparator = function(a, b){
		return a > b;   
	}
	
	//build a priority queue with custom comparator
	var pq = new PriorityQueue(comparator);
	
	//Use offer to add element to priorityQueue
	pq.offer(1);
	pq,offer(2);
	pq.offer(3);
	
	//Peek will get the element but not remove it, in this case, it will print 3 on the console.
	//peek（）函数会从队列中引用首位对象，但不从队列中删除？
	console.log(pq.peek());
	
	//pq will get and remove the top element in priorityQueue. In this case, it will print 3, 2, 1.
	//pop（）函数将会从队列中分离提取首位对象，该对象会被队列删除？
	while(pq.size()>0){
		console.log(pq.pop());
	}
	
```
The comparator is not necessary and can be omitted, a default comparator will be used if no comparator is offered, in fact the default comparator is the same as we used in the example.
The priofityQueue is implement by an array, the cost of 'shift' and 'pop' are O(logN), where N is the element count in the priorityQueue, and the cost of 'peek' is O(1).
The memory cost is O(N).

###Use Queue
```
	var Queue = require('pomelo-collection').queue;
	
	//Construct a queue with size 10000
	var queue = new Queue(10000);
	
	//Use 'push' to add element
	queue.push(1);
	queue.push(2);
	queue.push(3);
	
	//Use 'pop' to remove element
	while(queue.size()>0){
		console.log(queue.pop());
	}
```
The Queue is implement with an array, the cost of 'push' , 'pop' and 'size' are all O(1).
Push will fail if size exceed limit.
