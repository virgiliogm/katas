// https://play.elevatorsaga.com/

// Challenge 1
const app1 = {
  init: function (elevators, floors) {
    var elevator = elevators[0] // Let's use the first elevator

    // Whenever the elevator is idle (has no more queued destinations) ...
    elevator.on('idle', function () {
      // let's go to all the floors (or did we forget one?)
      for (let floor in floors) {
        elevator.goToFloor(floor)
      }
    })
  },
  update: function (dt, elevators, floors) {
    // We normally don't need to do anything here
  },
}

// Challenge 2
const app2 = {
  init: function (elevators, floors) {
    var elevator = elevators[0]

    elevator.on('idle', function () {
      for (let i = 0; i < floors.length; i++) {
        elevator.goToFloor(floors[i].floorNum())
      }
      for (let i = floors.length - 1; i >= 0; i--) {
        elevator.goToFloor(floors[i].floorNum())
      }
    })
  },
  update: function (dt, elevators, floors) {
    // We normally don't need to do anything here
  },
}

const app2b = {
  init: function (elevators, floors) {
    var elevator = elevators[0]

    elevator.on('idle', function () {
      for (let i = 0; i < floors.length; i++) {
        console.log(
          'going up',
          floors[i],
          floors[i].buttonStates.up === 'activated',
          elevator,
        )
        if (floors[i].buttonStates.up === 'activated') {
          elevator.goToFloor(floors[i].floorNum())
        }
      }
      for (let i = floors.length - 1; i >= 0; i--) {
        console.log(
          'going down',
          floors[i],
          floors[i].buttonStates.down === 'activated',
          elevator,
        )
        if (floors[i].buttonStates.down === 'activated') {
          elevator.goToFloor(floors[i].floorNum())
        }
      }
      elevator.goToFloor(0)
    })

    elevator.on('floor_button_pressed', function (floorNum) {
      console.log('floor_button_pressed', floorNum, elevator)
      elevator.goToFloor(floorNum)
    })

    elevator.on('passing_floor', function (floorNum, direction) {
      console.log('passing floor', floorNum, direction, floors, elevator)
      if (floors[floorNum].buttonStates[direction] === 'activated') {
        elevator.stop()
      }
    })
  },
  update: function (dt, elevators, floors) {
    // We normally don't need to do anything here
  },
}
