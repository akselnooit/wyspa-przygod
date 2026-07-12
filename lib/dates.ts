const formatter = new Intl.DateTimeFormat("pl-PL", { day:"numeric", month:"long", year:"numeric", timeZone:"UTC" });
export const formatDate = (value?:string) => value ? formatter.format(new Date(`${value}T00:00:00Z`)) : "Data nieznana";
