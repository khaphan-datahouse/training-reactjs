const nums = [1, 4, 0, 0, 1];
const canJump = function(nums) {
    let idxNext = 0;
    let i = 0;
    let idxMax = 0;
    while (i < nums.length) {
        if (nums[i] === 0) {
            let max = nums[idxNext] - i + idxNext;
            for (let j = idxNext + 1; j < i; j++) {
                if (nums[j] - i + j >= max) max = nums[j] - i + j;
                if (nums[idxMax] - i + idxMax >= max) max = nums[idxMax] - i + idxMax;
            }
            console.log(`max: ${max}`)
            if (max === 0 && i !== nums.length - 1) return false;
            else {
                idxNext = i;
                idxMax = i;
                nums[idxMax] = max;
            }
        }
        i++;
        console.log(nums);
    }
    return true;
}
console.log(canJump(nums));