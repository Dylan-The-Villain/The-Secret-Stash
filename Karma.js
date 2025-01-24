/* Script made by Dylan Taylor/Dylan the Villain with help from Frank of The Filth. Feel free to use it, but accrediting is nice!

This simple script allows you to have a text display on your "unit info" screen. It'll be based on the parameter of ID 0.
To change the name of the karma meter, change the KARMA "Text Renderer.drawSignText(x, y, "Karma")" to your custom name. 
DO NOT DELETE ANYTHING ELSE IN THAT LINE! Including the quotations "".
to change the color of the text itself, find the hex color code online and past it into "Color = (hexcode here)."
By default I have 5 texts made- if you want to add one, copy the format in "else if" below "TextRenderer.drawSignText".
to change the position of the text, modify the "X" and "Y" variables at the bottom.

when editing the parameter value, use this method:
- anything less than  negative 25 is REALLY BAD
- negative 25 to 0 is BAD
- 0 is NEUTRAL
- 1 to 25 is GOOD
- anything over 25 is REALLY GOOD
there is no maximum for the parameter set.
*/
(function () {
    var alias1 = UnitMenuTopWindow.drawWindowContent;
    UnitMenuTopWindow.drawWindowContent = function (x, y) {
        alias1.call(this, x, y)
        if (this._unit.getImportance() === ImportanceType.LEADER && this._unit.getUnitGroup() === UnitType.PLAYER) {
            this.drawKarma(x, y)
        }
    }
    UnitMenuTopWindow.drawKarma = function (xBase, yBase) {
        var value = root.getMetaSession().getVariableTable(0).getVariable(0)
        var textui = UnitMenuTopWindow.getWindowTextUI();
        var color = textui.getColor();
        var font = textui.getFont();
        var length = UnitMenuTopWindow._getUnitTextLength();
        var x = xBase + 303;
        var y = yBase + 30;
        TextRenderer.drawSignText(x, y, "Karma:");
        var text
        if ((value <= -25)) {
            text = "Really Bad"
            color = 0x942929
        }
        else if ((value > -25) && (value < 0)) {
            text = "Bad"
            color = 0xE44421
        }
        else if (value === 0) {
            text = "Neutral"
            color = 0xF5CD2D
        }
        else if ((value > 0) && (value < 25)) {
            text = "Good"
            color = 0x40bfff
        }
        else if (value > 25){
            text = "Really Good"
            color = 0xffffff
        }
        TextRenderer.drawText(x + 60, y + 4, text, length, color, font);
        //Modify the X and Y variables here to change the text position. don't delete anything else or it'll break!
        // NumberRenderer.drawNumber(x + 98, y, value)

    }

})();
