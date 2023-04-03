function entropy_by_blockentity (event, block, slot, item, output, outputCount) {
    if (event.block == block && event.player.mainHandItem.id == 'ae2:entropy_manipulator') {
        let blockItem = event.block.inventory.get(slot)
        if (blockItem == item) {
            event.cancel()
            event.block.inventory.extract(slot, 1, false)
            event.block.inventory.insert(slot, Item.of(output, outputCount), false)
            if (!event.player.creativeMode) {event.player.mainHandItem.nbt.internalCurrentPower -= 16000}
        }
    }
}

onEvent("loaded", e => {global.entropy_by_blockentity = entropy_by_blockentity})