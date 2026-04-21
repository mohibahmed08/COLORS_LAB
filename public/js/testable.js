
function formatColorName(color) {
  return color.trim().toLowerCase();
}

function buildAddColorPayload(color, userId) {
  return {
    color: formatColorName(color),
    userId: userId
  };
}

function extractColorList(results) {
  return results.join("<br />\r\n");
}

function hasValidSearchResponse(data) {
  return (
    data &&
    Array.isArray(data.results) &&
    Object.prototype.hasOwnProperty.call(data, "error")
  );
}

module.exports = {
  formatColorName,
  buildAddColorPayload,
  extractColorList,
  hasValidSearchResponse
};