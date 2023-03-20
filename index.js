function distanceFromHqInBlocks(streetNumber) {
    let result;
    if (streetNumber >= 42) {
        result = streetNumber - 42;
    } else {
        result = 42 - streetNumber;
    }
    return result;
}

function distanceFromHqInFeet(streetNumber) {
    let blocks = distanceFromHqInBlocks(streetNumber);
    return blocks * 264;
}

function distanceTravelledInFeet(startingBlock, destinationBlock) {
    let distance;
    if (destinationBlock >= startingBlock) {
        distance = destinationBlock - startingBlock;
    } else {
        distance = startingBlock - destinationBlock;
    }
    return distance * 264;
}

function calculatesFarePrice(startingBlock, destinationBlock) {
    let d = distanceTravelledInFeet(startingBlock, destinationBlock)
    if (d <= 400) {
        return 0
    }
    else if (d > 400 && d <= 2000) {
        return (d - 400) * 0.02;
    }
    else if (d > 2000 && d <= 2500)
        return 25;
    else {
        return "cannot travel that far"
    }
}