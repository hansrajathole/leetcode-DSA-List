class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int gasTotal = 0;
        int costTotal = 0;
        for(int i = 0 ; i < gas.length ; i++){
            gasTotal += gas[i]; 
            costTotal += cost[i]; 
        }

        if(gasTotal<costTotal){
            return -1;
        }

        int start = 0 ;
        int currentGas =  0;

        for(int j = 0 ; j<gas.length ; j++){
            currentGas += gas[j] - cost[j];
            if(currentGas < 0){
                start = j+1;
                currentGas = 0;
            }
        }

        return start;

    }
}