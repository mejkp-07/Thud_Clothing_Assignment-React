import Papa from "papaparse";
export const loadCSV = (filePath, callback) => {
    fetch(filePath)
        .then((response) => {
            if (!response.ok) throw new Error(`Failed to load file: ${filePath}`);
            return response.text();
        })
        .then((data) => {
            Papa.parse(data, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    if (!results.data || results.errors.length) {
                        throw new Error(`Error parsing CSV file: ${filePath}`);
                    }
                    callback(results.data);
                },
            });
        })
        .catch((error) => console.error("CSV Loading Error:", error.message));
};
