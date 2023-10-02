type YearData = {
  value: number,
  year: number
};

function generateYearData(): YearData[] {
  const currentYear = new Date().getFullYear();
  const yearData: YearData[] = [];
  for (let i = 0; i <= 11; i++) {
    yearData.push({ value: currentYear % 100 + i, year: currentYear + i });
  }
  return yearData;
}

const yearData = generateYearData();

export default yearData;