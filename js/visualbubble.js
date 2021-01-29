document.body.addEventListener('click', sortgraph);

// vars
numbers = Array();
items = 2400;
var itemssorted = 0;


for(i=0;i<items;i++){
    numbers.push(Math.floor(Math.random() * 500) +1);
    var graph = document.createElement('div');
    graph.setAttribute('id', i);
    graph.setAttribute('class', 'graphstyle');
    document.getElementById('graphcon').appendChild(graph);
    document.getElementById(i).style.height = numbers[i]+'px';
    document.getElementById(i).style.width = '0.5px';
}

function sortgraph(){
    for(x=0;x<2400;x++){
        aVar = setTimeout(sort, 100);
    }
}

function sort(){
    for(i=0;i<2400;i++){
        if(numbers[i]>numbers[i+1]){
            var mem = numbers[i+1];
            numbers[i+1] = numbers[i];
            document.getElementById(i+1).style.height = numbers[i]+'px';
            numbers[i] = mem;
            document.getElementById(i).style.height = mem+'px';
        }
    }
}