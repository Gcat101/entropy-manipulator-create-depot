# Entropy Manipulator usage on Create Depot

An in-world recipe type that allows you to transform items when the Entropy Manipulator from AE2 is used on a Create Depot.

## Example

```js
onEvent('block.right_click', event => {
    entropy_by_blockentity(event, 'create:depot', 0, 'minecraft:water_bucket', 'minecraft:ice', 1, true)
})
```

## Showcase

https://cdn.discordapp.com/attachments/1070297722848038912/1070297723380711434/javaw_yIU1lCltdU.mp4
