import Markdown from '@/components/common/Markdown';
import { MarkdownWrap } from '@/components/common/Markdown/Markdown.styles';

export default function SupportPage() {
  return (
    <>
    <MarkdownWrap style={{padding: 50}}>
    <Markdown>{`
# Support

Get help using Memento

## Creating an item
To create an item in the app, press the large button on the bottom of the screen and fill out the item.

To create a URL item from the share sheet, press the Memento icon in the share sheet, fill out an optional note, and press 'Done.'

To create a note item from a Shortcut using Siri or the action button, simply say 'Siri, create a new note in Memento' or configure the action button to that shortcut.

## Adding a Widget
The Memento widget can be added on the home screen or the lock screen.

To add the Memento widget on the home screen:
1. Long press on the home screen until the apps start to jiggle.
2. Tap the '+' button in the top left corner.
3. Scroll or search for 'Memento.'
4. Select the widget size you prefer and tap 'Add Widget.'
5. Drag the widget to your desired location and tap 'Done.'

To add the Memento widget on the lock screen:
1. From the lock screen, long press on the screen and tap 'Customize.'
2. Tap the '+' button under the time to add a new widget.
3. Scroll or search for 'Memento.'
4. Select the widget size you prefer and tap 'Add Widget.'
5. Tap 'Done' to save your changes.

## Settings
To access Memento settings, either go to the info view inside the app, or select the 'Memento' section in the Settings app. This allows you to customize behaviors of the widget and app.

For any other inquiries, [contact us](mailto:support@knotbin.xyz) and we will work with you to resolve it.

      `}</Markdown>
    </MarkdownWrap>
      
    </>
  );
}