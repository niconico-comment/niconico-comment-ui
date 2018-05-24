import {addDecorator, configure} from '@storybook/react'
import {setDefaults, withInfo} from '@storybook/addon-info'
import {setOptions} from '@storybook/addon-options'

function loadStories() {
    let req = require.context('./stories', true, /\.stories\.js$/)

    req.keys().forEach(filename => req(filename))
}

setOptions({
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
});

setDefaults({
    inline: true,
})

addDecorator((story, context) => withInfo(context.kind)(story)(context))
configure(loadStories, module)
