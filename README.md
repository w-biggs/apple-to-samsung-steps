# How to use

Not sure yet. Stay posted. Takes an `apple_health_export` folder as input and outputs a `samsunghealth_converted` folder with the data you need to import.

## Exporting data from Apple Health

Go into the Apple Health app, tap on your user icon and then select "Export Health Data."

## Importing data into Samsung Health

Steps adapted from [this StackOverflow answer](https://stackoverflow.com/a/61297489/1474787).

1. Close Samsung Health if running.
2. Create a file named `EnableDataImporter.txt` in the `download` directory (found at the root in "My Files" - `/storage/emulated/0/download`)
3. Open Samsung Health
4. Navigate to Menu > Settings (gear icon) > About Samsung Health
5. Click the "Import data" button
6. Navigate to the export directory
7. Select all files (the directory does not need to be selected) by using the checkbox in top left corner
8. Click "Done"

The data will now import - this may take a long time.

These steps are also provisional - I have not done this myself yet.