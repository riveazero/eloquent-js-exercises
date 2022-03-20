import * as aRobot from './aRobot.js';

function compareRobots(robot1, memory1, robot2, memory2) {
    let steps1 = 0, steps2 = 0;
    for (let i = 0; i < 100; i++) {
        let state = aRobot.VillageState.random();
        steps1 += numSteps(state, robot1, memory1);
        steps2 += numSteps(state, robot2, memory2);
    }

    return `Number of steps:\nRobot1: ${steps1 / 100}, Robot2: ${steps2 / 100}`;
}

function numSteps(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length === 0) return turn;
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}

console.log(compareRobots(aRobot.routeRobot, [], aRobot.goalOrientedRobot, []));