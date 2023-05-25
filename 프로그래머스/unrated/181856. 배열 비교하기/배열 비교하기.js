function solution(arr1, arr2) {
    let arr1Sum = 0
    let arr2Sum = 0
    for(let i = 0; i < arr1.length; i++){
        arr1Sum = arr1Sum + arr1[i]
    }
    
    for(let i = 0; i < arr2.length; i++){
        arr2Sum = arr2Sum + arr2[i]
    }
    
    if(arr1.length < arr2.length) return -1
    else if(arr2.length < arr1.length) return 1
    
    else{
        if(arr1Sum > arr2Sum) return 1
        if(arr1Sum < arr2Sum) return -1
    }
    return 0
}