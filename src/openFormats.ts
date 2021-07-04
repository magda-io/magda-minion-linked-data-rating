const FORMAT_STARS: { [stars: number]: string[] } = {
    2: [
        "xls",
        "xlsx",
        "mdb",
        "esri rest",
        "esri mapserver",
        "esri featureserver",
        "esri scenseserver",
        "excel"
    ],
    3: [
        "csv",
        "comma separated values",
        "tsv",
        "tab separated values",
        "wms",
        "web mapping service",
        "geojson",
        "wfs",
        "web feature service",
        "kml",
        "kmz",
        "json",
        "xml",
        "shp",
        "rss",
        "gpx",
        "GeoTiff"
    ],
    4: [
        "csv geo au",
        "sparql",
        "rdf",
        "relational document format",
        "json ld",
        "asc"
    ]
};

export default FORMAT_STARS;
