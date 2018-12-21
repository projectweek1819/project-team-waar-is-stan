function width(grid){
    return(grid[0].length)
}
function height(grid){
    return(grid.length)
}
function isInside(grid, position){
    
    if(position.x < width(grid) && position.y < height(grid)&& position.x >=0&& position.y >=0){
        return true;
    }
    else return false
}
function swap(grid, p, q){
    let tmp = grid[p.y][p.x]; //rood
    console.log(tmp)
    console.log(grid)
    
    grid[p.y][p.x] = grid[q.y][q.x];
    grid[q.y][q.x] = tmp;


}
function horizontalChainAt(grid, position){
    let count = 1;
    let ja = true;
    let ba = true;
    let i=1;
    let j=1;
    let x = position.x;
    let y = position.y;
    
    while(ja == true){
        if(grid[y][x] == grid[y][x+i]){
            
            count +=1;
            i+=1
        
        }
        else ja = false;
        
    }
    
    while(ba == true){
        if(grid[y][x] == grid[y][x-j] ){
            
            count +=1;
            j+=1
        
        }
        else ba = false;
        
    }

    return count;
}
function verticalChainAt(grid, position){
    let count = 1;
    let ja = true;
    let ba = true;
    let i=1;
    let j=1;
    let x = position.x;
    let y = position.y;
    
    while(ja == true){
        if( y+(i+1) <=grid.length && grid[y][x] == grid[y+i][x]){
            count +=1;
            i+=1
        }
        else ja = false;   
    }
    while(ba == true){
       
        if( y-j >=0 && grid[y][x] ==grid[y-j][x] ){
            count +=1;
            j+=1
        }
        else ba = false;
    }
    return count;
}
function removeChains(grid) {
    let chains = []
    for (let i = 0; i < grid.length; i++) {
        let count = 1;
        let kleur = null
        for (let j = 0; j < width(grid); j++) {
            if (grid[i][j] == kleur)
                count++
            else {
                if (count >= 3) {
                    for (let x = 0; x < count; x++)
                    {
                        chains.push({x:j-x,y:i});
                    }
                }
                    count = 1;
            }
            kleur = grid[i][j]
        }
    }
}





    
