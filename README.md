# Advanced CSS Component (Stylus)
An elegant way to write sandbox Stylus component.
Compile only what you need, and offer a possibility to skin it.

## Installation

    npm i advanced-css-component-stylus --save-dev

## The css component concept
Imagine two similar components like this

```css
.buttonLogin {
    display: block;
    width: 100%;
    padding: 10px;
    color: #000;
    background: yellow;
    border-color: #000;
}

.buttonReset {
    display: block;
    width: 100%;
    padding: 10px;
    color: #000;
    background: green;
    border-color: #000;
}
```

You can see a simple improvement

```css
.buttonLogin,
.buttonReset {
    display: block;
    width: 100%;
    padding: 10px;
    color: #000;
    border-color: #000;
}

.buttonLogin {
    background: yellow;
}

.buttonReset {
    background: green;
}
```

Now imagine this in stylus

```stylus
$button {
    display: block;
    width: 100%;
    padding: 10px;
    color: #000;
    border-color: #000;
}

.buttonLogin {
    @extend $button;
    background: yellow;
}

.buttonReset {
    @extend $button;
    background: green;
}
```

That's great but not really modular. Imagine to write it like this:

```stylus
$button {
    display: block;
    width: 100%;
    padding: 10px;
    color: #000;
    border-color: #000;
}

$button-skin-default {
    background: yellow;
}

button($selector: '.button', $skin: 'default') {
    {$selector} {
        @extend $button;
        @extend $button-skin-{$skin} !optional;
    }
}

button('.buttonLogin');

$button-skin-green {
    background: green;
}
button('.buttonReset', 'green');
```

This is totaly modular and your component is totaly skin friendly

## How to use Advanced CSS Component (Stylus)

### ACCExtend
To refine the code ACCExtend mixin extend the component default properties and the skin parameter

Instead of this:

```stylus
@extend $button;
@extend $button-skin-{$skin} !optional;
```

You only write this:
```stylus
ACCExtend('$button', $skin);
```

### ACCRegister
In case of standard plugin or white label project, this is realy important to declare a component and add the possibility to configure it later.


This mixin add a map to `$ACComponents` global variable.

It take 3 parameters
* componentName: ex. 'button'
* variationName: ex. '.buttonLogin' (it become the selector if selector is undefined in the next parameter)
* optionMap: _default: ()_ the configuration of the componentVariation (don't forget to escape the dollar in key for example: `$selector` will be `selector`)

```stylus
ACCRegister('button', '.buttonLogin');
ACCRegister('button', '.buttonReset', ($skin: 'green'));
```

### ACCConfig
This method allow the possibility to configure your previously registered component.
For example `.buttonReset` become like the default button, you will write this:

```stylus
ACCConfig('button', '.buttonReset', ($skin: 'default'));
```
