# Entropy Manipulator usage on Create Depot

[![kjspkg-available](https://github-production-user-asset-6210df.s3.amazonaws.com/79367505/250114674-fb848719-d52e-471b-a6cf-2c0ea6729f1c.svg)](https://kjspkglookup.modernmodpacks.site/#entropy-manipulator-create-depot)

An in-world recipe type that allows you to transform items when the Entropy Manipulator from AE2 is used on a Create Depot.

## Example

```js
onEvent('block.right_click', event => {
    global.entropy_by_blockentity(event, 'create:depot', 0, 'minecraft:water_bucket', 'minecraft:ice', 1, true)
})
```

## Showcase

https://user-images.githubusercontent.com/79367505/229584913-0f0aeff1-179d-49f4-b5d3-fa0c6ca1caaa.mp4
