// random numbers
numbers = Array();
items = 1200;


for(i=0;i<items;i++){
    numbers.push(Math.floor(Math.random() * 300) + 10);
    var graph = document.createElement('div');
    graph.setAttribute('id', i);
    graph.setAttribute('class', 'graphstyle');
    document.getElementById('graphcon').appendChild(graph);
    document.getElementById(i).style.height = numbers[i]+'px';
    document.getElementById(i).style.width = '1px';
}

function sortgraph(){
    for(x=0;x<1200;x++){
        myVar = setTimeout(sort, 500);
    }
}

function sort(){
    for(i=0;i<1200;i++){
        if(numbers[i]>numbers[i+1]){
            var mem = numbers[i+1];
            numbers[i+1] = numbers[i];
            document.getElementById(i+1).style.height = numbers[i]+'px';
            numbers[i] = mem;
            document.getElementById(i).style.height = mem+'px';
        }
    }
}
