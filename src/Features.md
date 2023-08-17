//!Pages
    Document, window, and screen will be removed for pages, a better way 
    to access the page.
{
    const page = new Page()
}


//! Elements
//! 4 Catagories
//: Containers
    to contain any following element inside a loopable box.
    they can also hold sets of data like, tables, and lists.
//: Text
    Any type of text, heading, paragraph.
//: Asset
    A way to store images, videos and audio
//: Inputs
    Inputs are predifined triggers that make it easy to use, 
    like buttons, checkboxes.


//!Handlers
//: Trigger
    A new way to handle html events
{
    const b = new Trigger(?event)
    //? listeners for text are: editible, 
    //? events are simply functions that run once the listener is called.
    const trigger = new Trigger.Mouse.Select((text) => {
        text.style.backgroundColor = "blue";
    })
    const hello = new Text("Hello!").$(trigger);

    new Asset("video").$(
        new Trigger.Asset.Play({
            video.progressbar.color = green;
        })
    )

    //* State: {
        Draggable, Editible
    },
    Trigger: {
        Mouse: {
            Click, Select, Down, Move, Out, Over, Up, Wheel
        },
        Key: {
            Down, Press, Up
        },
        Drag: {
            Base, End, Start, Leave, Over, Drop, Scroll
        },
        Window: {
            AfterPrint, BeforePrint, BeforeUnload, Error, HashChange, 
            Load, Message, Offline, Online, PageHide, PageShow, PopState,
            Resize, Storage, Unload
        }
        Form: {
            Blur, Change, Contectmenu, Focus, Input, Invalid, Reset, Search,
            Select, Submit
        },
        Clipboard: {
            Copy, Cut, Paste
        }
    }

}

//!States ^^^

//: Tags 
    A new way to handle classes, 
{
    const simpleText = new Tag<Text>();

    const a = new Text("a").$(simpleText);
    const b = new Text("word").$(simpleText);
    simpleText now can loop through both, and handle both like classes.
}



//! Global Attributes

//: accesskey: 
changed, use //?npm triggers: keys: access

{
    const trigger = new Trigger<Text>.Key.Access
    const a = new Text("a").$(trigger);
}

//: class:
changed, use new Tag(); //? tags
//: contenteditable:
changed, use //? triggers: State: editable
//* only for:
//? text

{
    const a = new Text("a").$(Trigger.State.Editible);
    // Trigger.Key.editable(a);
}

//: Data-*
removed, using js now, so data managment is better.
//: Dir:
Use the lang to affect the direction too

//: Draggable:
changed, use //? triggers: State: Draggable

{
    const a = new Text("a").$(new Trigger.State.Draggable(false | true));
}
//: Hidden:
when creating an element, mark hidden "true"

//: Id:
to make an id (say for css), you need to:
set the name property

//: Lang
Simply input the language and also the direction

//: SpellCheck
This is for text, so it is a Trigger.State.SpellCheck
//: Style
Style will stay same

//: Tabindex
changed, use //? triggers: keys: tabindex

{
    const trigger = new Trigger<Text>.Key.TabIndex(2)
    const a = new Text("a").$(trigger);
    
}

//: Title
changed, use //? triggers: keys: tabindex

{
    const trigger = new Trigger<Text>.Mouse.Title("title here")
    const a = new Text("a").$(trigger);
}
//: Translate
changed, use //? triggers: keys: tabindex

{
    const trigger = new Trigger<Text>.Window.Translate(true | false)
    const a = new Text("a").$(trigger);
}


//! Html Tags: 

//: Doctype: 
import 'Web' from './Web';

//: Html:
