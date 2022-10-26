const roomsData = [];

async function showRooms(req, res) {
    return res.json({rooms: roomsData})
}