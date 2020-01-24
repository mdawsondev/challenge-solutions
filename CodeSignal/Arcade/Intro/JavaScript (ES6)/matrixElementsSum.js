const matrixElementsSum = (floors) => {
  /** Keeps track of which rooms have safe upper floors. */
  const safeRooms = new Array(floors[0].length).fill(true);

  /** Returns the total fees from all safe floors. */
  return floors.reduce((totalFees, rooms, floorNum) => {

      /** Returns the total fee from all safe rooms. */
      return rooms.reduce((fee, price, roomNum) => {
      const safeRoom = safeRooms[roomNum] && price > 0;
      const charge = safeRoom ? price : 0;
      if (!safeRoom) safeRooms[roomNum] = false;
      return fee + charge;
      }, totalFees)
  }, 0);
};