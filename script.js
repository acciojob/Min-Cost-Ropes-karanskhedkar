function mincost(arr){ 
	arr.sort((a,b)=>a-b);
	let cost=0;
	while(arr.length>1){
		const first=arr[0];
		const last=arr[1];
		cost=cost+first+last;
		arr.shift();
		arr.shift();
		arr.unshift(first+last);
		arr.sort((a,b)=>a-b);
	}
	return cost;
}

module.exports=mincost;
