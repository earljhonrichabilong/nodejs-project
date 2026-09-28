const GreetingManager = {
    getGreeting(name = 'Developer') {
        const hours = new Date().getHours();
        let timeOfDay = 'day';

        if (hours < 12) {
            timeOfDay = 'morning';
        } else if (hours < 18) {
            timeOfDay = 'afternoon';
        } else {
            timeOfDay = 'evening';
        }

        return `Good ${timeOfDay}, ${name}! Welcome to the project.`;
    }
};

const MathUtils = {
    sum(numbers = []) {
        return numbers.reduce((total, num) => total + num, 0);
    },

    average(numbers = []) {
        if (numbers.length === 0) return 0;
        return this.sum(numbers) / numbers.length;
    }
};

function run() {
    console.log('--- Project Update: v0.2.0 ---');

    const userGreeting = GreetingManager.getGreeting('Contributor');
    console.log(userGreeting);

    const sampleData = [10, 20, 30, 40, 50];
    console.log(`Dataset: [${sampleData.join(', ')}]`);
    console.log(`Sum: ${MathUtils.sum(sampleData)}`);
    console.log(`Average: ${MathUtils.average(sampleData)}`);
}

run();