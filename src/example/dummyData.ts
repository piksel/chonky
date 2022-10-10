import { ButtonColor } from "../components/Button";

export const dummyTableDataCols: DummyTableDataCol[] = ['Name', 'Type', 'Status', 'Weight'];

export type DummyTableDataCol = 'Name' | 'Type' | 'Status' | 'Weight' | 'Description' | 'Color';

export type DummyTableDataRow = Record<DummyTableDataCol, string> & {Color: ButtonColor};

export const dummyTableData: DummyTableDataRow[] = [
    {
        Name: "Grilling Chonkers",
        Status: "Available",
        Type: "Fire/Weird",
        Weight: "192 lbs",
        Description: "This pokébowl likes to do it's thing...",
        Color: "orange",
    },
    {
        Name: "Sallad Chonkers",
        Status: "Available",
        Type: "Grass/Weird",
        Weight: "200 lbs",
        Description: "This pokébowl likes to do it's thing...",
        Color: "green",
    },
    {
        Name: "Splashy Chonkers",
        Status: "Available",
        Type: "Water/Weird",
        Weight: "180 lbs",
        Description: "This pokébowl likes to do it's thing...",
        Color: "blue",
    }
]