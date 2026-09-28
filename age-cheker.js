function checkVotingEligibility(age) {
    if (age >= 18) {
        return "You are eligible to vote! 🎉";
    } else {
        return "You are too young to vote yet. 🧒";
    }
}

// Example usage:
console.log(checkVotingEligibility(20)