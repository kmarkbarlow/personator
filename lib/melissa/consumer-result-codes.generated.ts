/**
 * Auto-generated from Personator Consumer result codes HTML.
 * Snapshot: scripts/melissa-consumer-result-codes.html
 * Source: https://docs.melissa.com/cloud-api/personator-consumer/result-codes.html
 * Generated: 2026-04-09
 */
export const PERSONATOR_CONSUMER_RESULT_CODES: Record<
  string,
  { title: string; description: string }
> = {
  "GE01": {
    "title": "Regional Geocode Not Found",
    "description": "Geocode could not be appended for the input locality or postal code."
  },
  "GE02": {
    "title": "No Geocode for Input Address",
    "description": "The input address did not provide enough valid information to append a geocode."
  },
  "GE03": {
    "title": "Records Per Request Exceeded",
    "description": "The counted records sent more than the number of records allowed per request."
  },
  "GE04": {
    "title": "Empty License Key",
    "description": "The License Key is empty."
  },
  "GE05": {
    "title": "Invalid License Key",
    "description": "The License Key is invalid."
  },
  "GE06": {
    "title": "Disabled License Key",
    "description": "The License Key is disabled."
  },
  "GE07": {
    "title": "Invalid Request",
    "description": "The SOAP, JSON, or XML request is invalid."
  },
  "GE08": {
    "title": "Product/Level Not Enabled",
    "description": "The License Key is invalid for this product or level."
  },
  "GE09": {
    "title": "Customer Does Not Exist",
    "description": "The Customer ID is not in our system."
  },
  "GE10": {
    "title": "Customer License Disabled",
    "description": "The encrypted license is on the ban list."
  },
  "GE11": {
    "title": "Customer Disabled",
    "description": "The Customer ID is disabled."
  },
  "GE12": {
    "title": "IP Blacklisted",
    "description": "The IP Address is on the global ban list."
  },
  "GE13": {
    "title": "IP Not Whitelisted",
    "description": "The IP Address is not on the customer’s whitelist. IP Whitelisting is defined manually through your Melissa Account Administrator or by encoding them when using the token service for token generation."
  },
  "GE14": {
    "title": "Out of Credits",
    "description": "The account has ran out of credits. Add more credits to continue using the service."
  },
  "GE16": {
    "title": "Locked Out of Service",
    "description": "The CustomerID is currently locked out of the service due to too many bad reverse MAK submissions. The CustomerID will be re-enabled after1 hour."
  },
  "GE20": {
    "title": "Verify Not Activated",
    "description": "The Verify package was requested but is not active for the License Key."
  },
  "GE21": {
    "title": "Append Not Activated",
    "description": "The Append package was requested but is not active for the License Key."
  },
  "GE22": {
    "title": "Move Not Activated",
    "description": "The Move package was requested but is not active for the License Key."
  },
  "GE23": {
    "title": "No Valid Action Requested",
    "description": "No valid action was requested by the service. The request must include at least one of the following actions: Check, Verify, Append, or Move."
  },
  "GE24": {
    "title": "Demographics Not Activated",
    "description": "The Demographics package was requested but is not active for the License Key."
  },
  "GE27": {
    "title": "IP Columns Not Activated",
    "description": "IP Columns requested but not active for the customer ID."
  },
  "GE29": {
    "title": "Not Available for Credit License",
    "description": "The requested fields were not available for a credit license. To have access to the demographics fields, please upgrade your license to a subscription."
  },
  "GW01": {
    "title": "Expiring License",
    "description": "Your License Key is expiring soon. Please contact your sales representative for a new License Key."
  },
  "GW11": {
    "title": "Option Name Error",
    "description": "The option name is either misspelled or incorrect."
  },
  "GW12": {
    "title": "Option Value Error",
    "description": "The option value is misspelled or incorrectly formatted."
  },
  "SE01": {
    "title": "Cloud API Internal Error",
    "description": "The Cloud API experienced an internal error."
  },
  "SP01": {
    "title": "No Action",
    "description": "A record was sent in, but the service did not have enough information to modify the record."
  },
  "AC01": {
    "title": "Postal Code Change",
    "description": "The postal code was changed or added."
  },
  "AC02": {
    "title": "Administrative Area Change",
    "description": "The administrative area (state, province) was added or changed."
  },
  "AC03": {
    "title": "Locality Change",
    "description": "The locality (city, municipality) name was added or changed."
  },
  "AC04": {
    "title": "Alternate to Base Change",
    "description": "US Only. The address was found to be an alternate record and changed to the base (preferred) version."
  },
  "AC05": {
    "title": "Alias Name Change",
    "description": "US Only. An alias is a common abbreviation for a long street name, such as “MLK Blvd” for “Martin Luther King Blvd.” This change code indicates that the full street name (preferred) has been substituted for the alias."
  },
  "AC06": {
    "title": "Address1/Address2 Swap",
    "description": "Address1 was swapped with Address2 because Address1 could not be verified and Address2 could be verified."
  },
  "AC07": {
    "title": "Address1 & Company Swapped",
    "description": "Address1 was swapped with Company because only Company had a valid address."
  },
  "AC08": {
    "title": "Plus4 Change",
    "description": "US Only. A non-empty plus4 was changed."
  },
  "AC09": {
    "title": "Dependent Locality Change",
    "description": "The dependent locality (urbanization) was changed."
  },
  "AC10": {
    "title": "Thoroughfare Name Change",
    "description": "The thoroughfare (street) name was added or changed due to a spelling correction."
  },
  "AC11": {
    "title": "Thoroughfare Type Change",
    "description": "The thoroughfare (street) leading or trailing type was added or changed, such as from “St” to “Rd.”"
  },
  "AC12": {
    "title": "Thoroughfare Directional Change",
    "description": "The thoroughfare (street) pre-directional or post-directional was added or changed, such as from “N” to “NW.”"
  },
  "AC13": {
    "title": "Sub Premise Type Change",
    "description": "The sub premise (suite) type was added or changed, such as from “STE” to “APT.”"
  },
  "AC14": {
    "title": "Sub Premise Number Change",
    "description": "The sub premise (suite) unit number was added or changed."
  },
  "AC15": {
    "title": "Double Dependent Locality Change",
    "description": "The double dependent locality was added or changed."
  },
  "AC16": {
    "title": "SubAdministrative Area Change",
    "description": "The subadministrative area was added or changed."
  },
  "AC17": {
    "title": "SubNational Area Change",
    "description": "The subnational area was added or changed."
  },
  "AC20": {
    "title": "House Number Change",
    "description": "The house number was changed."
  },
  "AE01": {
    "title": "General Error",
    "description": "The address could not be verified. This is likely due to a missing or invalid locality or postal code."
  },
  "AE02": {
    "title": "Unknown Street",
    "description": "Could not match the input street to a unique street name. Either no matches or too many matches found."
  },
  "AE03": {
    "title": "Component Mismatch Error",
    "description": "The combination of directionals (N, E, SW, etc) and the suffix (AVE, ST, BLVD) is not correct and produced multiple possible matches."
  },
  "AE04": {
    "title": "Non-Deliverable Address",
    "description": "US Only. A physical plot exists but is not a deliverable addresses. One example might be a railroad track or river running alongside this street, as they would prevent construction of homes in that location."
  },
  "AE05": {
    "title": "Multiple Match",
    "description": "The address was matched to multiple records. There is not enough information available in the address to break the tie between multiple records."
  },
  "AE06": {
    "title": "Early Warning System",
    "description": "US Only. This address currently cannot be verified but was identified by the Early Warning System (EWS) as belonging to a upcoming area and will likely be included in a future update."
  },
  "AE07": {
    "title": "Missing Minimum Address",
    "description": "Minimum requirements for the address to be verified is not met. Address must have at least one address line and also the postal code or the locality/administrative area."
  },
  "AE08": {
    "title": "Sub Premise Number Invalid",
    "description": "The thoroughfare (street address) was found but the sub premise (suite) was not valid."
  },
  "AE09": {
    "title": "Sub Premise Number Missing",
    "description": "The thoroughfare (street address) was found but the sub premise (suite) was missing."
  },
  "AE10": {
    "title": "Premise Number Invalid",
    "description": "The premise (house or building) number for the address is not valid."
  },
  "AE11": {
    "title": "Premise Number Missing",
    "description": "The premise (house or building) number for the address is missing."
  },
  "AE12": {
    "title": "Box Number Invalid",
    "description": "The PO (Post Office Box), RR (Rural Route), or HC (Highway Contract) Box number is invalid."
  },
  "AE13": {
    "title": "Box Number Missing",
    "description": "The PO (Post Office Box), RR (Rural Route), or HC (Highway Contract) Box number is missing."
  },
  "AE14": {
    "title": "PMB Number Missing",
    "description": "US Only. The address is a Commercial Mail Receiving Agency (CMRA) and the Private Mail Box (PMB or #) number is missing."
  },
  "AE17": {
    "title": "Sub Premise Not Required (Deprecated - See AS23)",
    "description": "A sub premise (suite) number was entered but the address does not have secondaries. (Deprecated - See AS23)"
  },
  "AE21": {
    "title": "MAK Not Found",
    "description": "The input MAK was not found. This can be caused by an improperly formatted MAK (a proper MAK is 10 numerical digits long) or by requesting a MAK number that has not yet been assigned to a location."
  },
  "AS01": {
    "title": "Address Fully Verified",
    "description": "The address is valid and deliverable according to official postal agencies."
  },
  "AS02": {
    "title": "Valid Building Address",
    "description": "The building address was verified but the suite/apartment number is missing or invalid."
  },
  "AS03": {
    "title": "Non USPS Address Match",
    "description": "US Only. This US address is not serviced by the USPS but does exist and may receive mail through third party carriers like UPS."
  },
  "AS04": {
    "title": "Proprietary Address Format",
    "description": "The address uses a proprietary addressing scheme where only the format could be validated."
  },
  "AS09": {
    "title": "Foreign Address",
    "description": "The address is in a non-supported country."
  },
  "AS10": {
    "title": "CMRA Address",
    "description": "US Only. The address is a Commercial Mail Receiving Agency (CMRA) like a Mailboxes Etc. These addresses include a Private Mail Box (PMB or #) number."
  },
  "AS11": {
    "title": "PBSA Address",
    "description": "A PO Box formatted as a street address for package and mail delivery."
  },
  "AS12": {
    "title": "Record Move",
    "description": "The record moved to a new address."
  },
  "AS13": {
    "title": "Address Updated By LACS",
    "description": "US Only. The address has been converted by LACSLink® from a rural-style address to a city-style address."
  },
  "AS14": {
    "title": "Suite Appended",
    "description": "US Only. A suite was appended by SuiteLink™ using the address and company name."
  },
  "AS15": {
    "title": "Apartment Appended",
    "description": "An apartment number was appended by AddressPlus using the address and last name."
  },
  "AS16": {
    "title": "Vacant Address",
    "description": "US Only. The address has been unoccupied for more than 90 days."
  },
  "AS17": {
    "title": "No USPS Mail Delivery",
    "description": "This address is classified as not receiving mail by the USPS via their No-Stat flag. Delivery might still be possible by third party carriers but that cannot be counted on."
  },
  "AS18": {
    "title": "DPV Locked Out",
    "description": "US Only. DPV processing was terminated due to the detection of what is determined to be an artificially created address."
  },
  "AS20": {
    "title": "Deliverable only by USPS",
    "description": "US Only. This address can only receive mail delivered through the USPS (i.e. PO Box or a military address)."
  },
  "AS23": {
    "title": "Extraneous Suite Information",
    "description": "Extraneous information not used in verifying the address was found. This information was returned in the suite field."
  },
  "AS24": {
    "title": "USPS Door Not Accessible",
    "description": "Address identified by the USPS where carriers cannot physically access a building or door for mail delivery."
  },
  "AS25": {
    "title": "Unique ZIP code",
    "description": "The address contains a USPS unique ZIP code which means any address may be marked as deliverable."
  },
  "AS26": {
    "title": "Unknown Data Moved to ParsedGarbage",
    "description": "The input contains data that could not be identified. That data is returned in the ParsedGarbage/AddressExtras field"
  },
  "AS27": {
    "title": "Phantom Route address",
    "description": "Addresses that are assigned to a phantom route of R777 or R779."
  },
  "CD01": {
    "title": "No Children Present",
    "description": "There are no children under the age of 18 at this address."
  },
  "CD02": {
    "title": "Children Present",
    "description": "There are children under the age of 18 at this address."
  },
  "DA00": {
    "title": "Address Appended",
    "description": "An address was changed or appended."
  },
  "DA01": {
    "title": "City/State Append from Phone",
    "description": "A city or state was appended from a phone number wire center."
  },
  "DA10": {
    "title": "Name Appended",
    "description": "A full name was changed or appended."
  },
  "DA20": {
    "title": "Company Appended",
    "description": "A company name was changed or appended."
  },
  "DA30": {
    "title": "Phone Appended",
    "description": "A phone number was changed or appended."
  },
  "DA40": {
    "title": "Email Appended",
    "description": "An email address was changed or appended."
  },
  "DD00": {
    "title": "Not Deceased",
    "description": "This person is not deceased."
  },
  "DD01": {
    "title": "Deceased",
    "description": "This person is deceased."
  },
  "EE01": {
    "title": "Email Syntax Error",
    "description": "There is a syntax error in the submitted email address."
  },
  "EE02": {
    "title": "Email Domain Not Found",
    "description": "A Domain of the submitted email address was not found."
  },
  "EE03": {
    "title": "Email Server Not Found",
    "description": "The mail server of the submitted email address was not found."
  },
  "EE04": {
    "title": "Invalid Email",
    "description": "An invalid mailbox was detected (i.e. noreply)."
  },
  "ES01": {
    "title": "Correct Email Syntax and Domain",
    "description": "This email address has correct syntax and belongs to a domain known to receive mail. This does not indicate a mailbox-level deliverability check was performed. To perform real-time checks and see DCS score , use Global Email with option VerifyMailbox:Premium ."
  },
  "ES02": {
    "title": "Invalid Email",
    "description": "This email was confirmed to be a invalid email."
  },
  "ES03": {
    "title": "Unknown Email",
    "description": "This email’s status is unknown due to unknown external factors. Please try again another time."
  },
  "ES04": {
    "title": "Mobile Email Address",
    "description": "The domain name was identified as a mobile email address and classified as not deliverable by the FCC."
  },
  "ES05": {
    "title": "Disposable Domain",
    "description": "The domain name of the submitted email was identified as a disposable domain."
  },
  "ES06": {
    "title": "Spamtrap Domain",
    "description": "The domain name of the submitted email was identified as a spamtrap. Mailing to this domain could result in the sender being blacklisted."
  },
  "ES07": {
    "title": "Accept All Server",
    "description": "The mail server is an accept all server. Accept-All domains is set in a way that makes all emails seem valid."
  },
  "ES08": {
    "title": "Role Address",
    "description": "This email address was created as a group. We cannot validate these in real-time as these queries are often blocked and may damage reputation for senders, especially because members of these groups are sometimes prone to abuse spam reporting. For example: sales , support , or postmaster"
  },
  "ES10": {
    "title": "Syntax Changed",
    "description": "The syntax of the submitted email address was changed."
  },
  "ES11": {
    "title": "Top Level Domain Changed",
    "description": "The top level domain of the submitted email address was changed."
  },
  "ES12": {
    "title": "Domain Changed (Spelling)",
    "description": "The domain of the submitted email address was corrected for spelling."
  },
  "ES13": {
    "title": "Domain Changed (Update)",
    "description": "The domain of the submitted email address was updated due to a domain name change."
  },
  "ES21": {
    "title": "Verify (Precision: Cached Mailbox Result)",
    "description": "The mailbox was found to be already validated in our mailbox database."
  },
  "ES32": {
    "title": "Phishing Domain",
    "description": "This domain has been flagged for phishing attacks. Emails from this domain may be part of an attempt to harvest your users’ personal information."
  },
  "ES33": {
    "title": "Scam Domain",
    "description": "This domain has been linked to scam activity. Emails from this domain may be part of an attempt to swindle funds or securities from your users."
  },
  "ES34": {
    "title": "Malware Domain",
    "description": "This domain was identified as being used in malware attacks. Emails from this domain may attempt to trick your users into installing malicious software such as viruses, spyware, ransomware, or adware."
  },
  "ES35": {
    "title": "Malicious Domain",
    "description": "The domain has been listed for malicious activity. Emails from this domain may be used by bad actors for nefarious purposes."
  },
  "ES36": {
    "title": "Spamtrap Mailbox",
    "description": "Indicates that we predict this email address is a spamtrap mailbox. Mailing to this specific mailbox could result in the sender being blacklisted."
  },
  "ES37": {
    "title": "Breach Flag",
    "description": "This email has been exposed in a data breach."
  },
  "GD01": {
    "title": "Male",
    "description": "This person is male."
  },
  "GD02": {
    "title": "Female",
    "description": "This person is female."
  },
  "GD03": {
    "title": "Neutral",
    "description": "The sex of this person cannot be determined from the first name."
  },
  "GS01": {
    "title": "Geocoded to Street Level",
    "description": "The record was coded to the street level (Zip+4 for US, full postal code for CA)."
  },
  "GS03": {
    "title": "Geocoded to Community Level",
    "description": "The record was coded to the community level (ZIP centroid for US, 3-digit postal code for CA)."
  },
  "GS05": {
    "title": "Geocoded to Rooftop Level",
    "description": "The record was geocoded down to the rooftop level, meaning the point is within the property boundaries, usually the center."
  },
  "GS06": {
    "title": "Geocoded to Interpolated Rooftop Level",
    "description": "The record was geocoded down to the rooftop level using interpolation (educated estimations using street coordinates). The point may be in or close to the property boundaries."
  },
  "GS10": {
    "title": "Wire Center Lat/Long",
    "description": "The latitude and longitude are based off of the wire center of the phone number."
  },
  "ID01": {
    "title": "$0-$15,000",
    "description": "Household Income is between $0 and $15,000."
  },
  "ID02": {
    "title": "$15,001-$20,000",
    "description": "Household Income is between $15,001 and $20,000."
  },
  "ID03": {
    "title": "$20,001-$30,000",
    "description": "Household Income is between $20,001 and $30,000."
  },
  "ID04": {
    "title": "$30,001-$40,000",
    "description": "Household Income is between $30,001 and $40,000."
  },
  "ID05": {
    "title": "$40,001-$50,000",
    "description": "Household Income is between $40,001 and $50,000."
  },
  "ID06": {
    "title": "$50,001-$60,000",
    "description": "Household Income is between $50,001 and $60,000."
  },
  "ID07": {
    "title": "$60,001-$75,000",
    "description": "Household Income is between $60,001 and $75,000."
  },
  "ID08": {
    "title": "$75,001-$100,000",
    "description": "Household Income is between $75,001 and $100,000."
  },
  "ID09": {
    "title": "$100,001-$125,000",
    "description": "Household Income is between $80,001 and $125,000."
  },
  "ID10": {
    "title": "$125,001-$150,000",
    "description": "Household Income is between $125,001 and $150,000."
  },
  "ID11": {
    "title": "$150,001+",
    "description": "Household Income is above $150,001."
  },
  "LD00": {
    "title": "Less than 1 year",
    "description": "The person has lived at this address for less than 1 year."
  },
  "LD01": {
    "title": "1-2 years",
    "description": "The person has lived at this address for 1 to 2 years."
  },
  "LD02": {
    "title": "2-3 years",
    "description": "The person has lived at this address for 2 to 3 years."
  },
  "LD03": {
    "title": "3-4 years",
    "description": "The person has lived at this address for 3 to 4 years."
  },
  "LD04": {
    "title": "4-5 years",
    "description": "The person has lived at this address for 4 to 5 years."
  },
  "LD05": {
    "title": "5-6 years",
    "description": "The person has lived at this address for 5 to 6 years."
  },
  "LD06": {
    "title": "6-7 years",
    "description": "The person has lived at this address for 6 to 7 years."
  },
  "LD07": {
    "title": "7-8 years",
    "description": "The person has lived at this address for 7 to 8 years."
  },
  "LD08": {
    "title": "8-9 years",
    "description": "The person has lived at this address for 8 to 9 years."
  },
  "LD09": {
    "title": "9-10 years",
    "description": "The person has lived at this address for 9 to 10 years."
  },
  "LD10": {
    "title": "10-11 years",
    "description": "The person has lived at this address for 10 to 11 years."
  },
  "LD11": {
    "title": "11-12 years",
    "description": "The person has lived at this address for 11 to 12 years."
  },
  "LD12": {
    "title": "12-13 years",
    "description": "The person has lived at this address for 12 to 13 years."
  },
  "LD13": {
    "title": "13-14 years",
    "description": "The person has lived at this address for 13 to 14 years."
  },
  "LD14": {
    "title": "14-15 years",
    "description": "The person has lived at this address for 14 to 15 years."
  },
  "LD15": {
    "title": "15+ years",
    "description": "The person has lived at this address for more than 15 years."
  },
  "MD01": {
    "title": "Definitely Single",
    "description": "This person is single"
  },
  "MD02": {
    "title": "Inferred Single",
    "description": "This person is most likely single"
  },
  "MD03": {
    "title": "Inferred Married",
    "description": "This person is most likely married"
  },
  "MD04": {
    "title": "Definitely Married",
    "description": "This person in married"
  },
  "NE01": {
    "title": "Unrecognized Format",
    "description": "Format of Input string was not recognized or too long to represent a valid name."
  },
  "NE02": {
    "title": "Multiple First Names Detected",
    "description": "Multiple first names were detected and could not be accurately genderized."
  },
  "NE03": {
    "title": "Vulgarity Detected",
    "description": "A vulgarity was detected in the name."
  },
  "NE04": {
    "title": "Suspicious Word Detected",
    "description": "The name contained words found on the list of nuisance names, such as “Mickey Mouse.”"
  },
  "NE05": {
    "title": "Company Name Detected",
    "description": "The name contained words normally found in a company name."
  },
  "NE06": {
    "title": "Non-Alphabetic Character Detected",
    "description": "The name contained a non-alphabetic character."
  },
  "NS01": {
    "title": "Parsing Successful",
    "description": "Name parsing was successful."
  },
  "NS02": {
    "title": "Error Parsing",
    "description": "An error was detected. Please check for a name error code."
  },
  "NS03": {
    "title": "First Name Spelling Corrected",
    "description": "The spelling in the first name field was corrected."
  },
  "NS04": {
    "title": "First Name 2 Spelling Corrected",
    "description": "The spelling in the second first name field was corrected."
  },
  "NS05": {
    "title": "First Name 1 Found",
    "description": "FirstName1 was found in our census table of names. Very likely to be a real first name."
  },
  "NS06": {
    "title": "Last Name 1 Found",
    "description": "LastName1 was found in our census table of names. Very likely to be a real last name."
  },
  "NS07": {
    "title": "First Name 2 Found",
    "description": "FirstName2 was found in our census table of names. Very likely to be a real first name."
  },
  "NS08": {
    "title": "Last Name 2 Found",
    "description": "LastName2 was found in our census table of names. Very likely to be a real last name."
  },
  "PE01": {
    "title": "Invalid Phone",
    "description": "The area code/phone number does not exist in our database or contains non-numbers."
  },
  "PE02": {
    "title": "Blank Phone",
    "description": "The phone number is blank."
  },
  "PE03": {
    "title": "Bad Phone",
    "description": "The phone number has too many or too few digits."
  },
  "PE04": {
    "title": "Multiple Match",
    "description": "Two or more possible area codes are available as a fix and their distance is too close to choose one over the other."
  },
  "PE05": {
    "title": "Bad Prefix/Prefix +1",
    "description": "The phone prefix or first 7-digits do not exist in our database."
  },
  "PS01": {
    "title": "Valid Phone",
    "description": "The phone number has been verified as valid."
  },
  "PS02": {
    "title": "7-Digit Match",
    "description": "The first 7-digits of the phone number have been verified, but activity cannot be confirmed."
  },
  "PS03": {
    "title": "Corrected Area Code",
    "description": "NewAreaCode contains corrected area code that was changed according to the postal code it falls into."
  },
  "PS06": {
    "title": "Updated Area Code",
    "description": "The area code was changed due to an area code split. The updated code is located within NewAreaCode."
  },
  "PS07": {
    "title": "Cellular Line",
    "description": "On activation, the exchange type of the phone number was designated as a cellular number, but current status cannot be confirmed."
  },
  "PS08": {
    "title": "Land Line",
    "description": "On activation, the exchange type of the phone number was designated as a land line, but current status cannot be confirmed."
  },
  "PS09": {
    "title": "VOIP Line",
    "description": "Premium Mode Only (US/CA Only). On activation, the exchange type of the phone number was designated as a VOIP line, but current status cannot be confirmed."
  },
  "PS10": {
    "title": "Residential Number",
    "description": "The phone number belongs to a residence."
  },
  "PS11": {
    "title": "Business Number",
    "description": "The phone number belongs to a business."
  },
  "PS12": {
    "title": "SOHO Number",
    "description": "The phone number belongs to a small office or home office."
  },
  "RD01": {
    "title": "Definite Renter",
    "description": "This person is a renter."
  },
  "RD02": {
    "title": "Inferred Renter",
    "description": "This person is most likely a renter."
  },
  "RD03": {
    "title": "Inferred Owner",
    "description": "This person is most likely an owner."
  },
  "RD04": {
    "title": "Definite Owner",
    "description": "This person is an owner."
  },
  "VR01": {
    "title": "Individual and Address Match",
    "description": "The individual name and address match."
  },
  "VR02": {
    "title": "Individual and Phone Match",
    "description": "The individual name and phone match."
  },
  "VR03": {
    "title": "Individual and Email Match",
    "description": "The individual name and email match."
  },
  "VR04": {
    "title": "Address and Phone Match",
    "description": "The address and phone match."
  },
  "VR05": {
    "title": "Address and Email Match",
    "description": "The address and email match."
  },
  "VR06": {
    "title": "Phone and Email Match",
    "description": "The phone and email match."
  },
  "VR07": {
    "title": "Organization and Address Match",
    "description": "The organization name and address match."
  },
  "VR08": {
    "title": "Organization and Phone Match",
    "description": "The organization name and phone match."
  },
  "VR09": {
    "title": "Organization and Email Match",
    "description": "The organization name and email match."
  },
  "VR10": {
    "title": "Organization and Individual Match",
    "description": "The organization name and individual name match."
  },
  "VS00": {
    "title": "Address Not Found",
    "description": "An address was not found in the reference data."
  },
  "VS01": {
    "title": "Historical Address Match",
    "description": "The current address is outdated and a newer address match was found. Use the “Move” action to get the latest address."
  },
  "VS02": {
    "title": "Partial Address Match",
    "description": "A match was made to a partial address. This could be due to matching the street address but not to the suite."
  },
  "VS12": {
    "title": "Last Name Match",
    "description": "A match was made to the last name only."
  },
  "VS13": {
    "title": "First Name Match",
    "description": "A match was made to the first name only."
  },
  "VS22": {
    "title": "Partial Company Name Match",
    "description": "A match was made to a partial company name."
  },
  "VS30": {
    "title": "Phone Not Found",
    "description": "A phone number was not found in the reference data."
  },
  "VS31": {
    "title": "Historical Phone Match",
    "description": "The current phone number is outdated and a newer phone number match was found. Use the “Append” action to get the latest phone number."
  },
  "VS40": {
    "title": "Email Not Found",
    "description": "An email address was not found in the reference data."
  },
  "VS41": {
    "title": "Historical Email Address",
    "description": "The current email address is outdated and a newer email address match was found. Use the “Append” action to get the latest email address."
  },
  "VS50": {
    "title": "Last4 Only Match",
    "description": "The name only matched to the last 4 digits of the Social Security Number."
  },
  "WD01": {
    "title": "Physician/Dentist",
    "description": "Physician/Dentist"
  },
  "WD02": {
    "title": "Healthcare",
    "description": "Healthcare"
  },
  "WD03": {
    "title": "Lawyer/Judge",
    "description": "Lawyer/Judge"
  },
  "WD04": {
    "title": "Professional/Technical",
    "description": "Professional/Technical"
  },
  "WD05": {
    "title": "Management",
    "description": "Management"
  },
  "WD06": {
    "title": "Teacher/Educator",
    "description": "Teacher/Educator"
  },
  "WD07": {
    "title": "Sales/Marketing",
    "description": "Sales/Marketing"
  },
  "WD08": {
    "title": "Clerical/Service Worker",
    "description": "Clerical/Service Worker"
  },
  "WD09": {
    "title": "Tradesmen/Laborer",
    "description": "Tradesmen/Laborer"
  },
  "WD10": {
    "title": "Farmer",
    "description": "Farmer"
  },
  "WD11": {
    "title": "Student",
    "description": "Student"
  },
  "WD12": {
    "title": "Homemaker",
    "description": "Homemaker"
  },
  "WD13": {
    "title": "Retired",
    "description": "Retired"
  },
  "WD14": {
    "title": "Federal Employee",
    "description": "Federal Employee"
  },
  "WD15": {
    "title": "Military",
    "description": "Military"
  },
  "WD16": {
    "title": "Military Retired",
    "description": "Military Retired"
  },
  "WD99": {
    "title": "Other",
    "description": "Other"
  },
  "WD17": {
    "title": "Business Owner",
    "description": "Business Owner"
  },
  "WD18": {
    "title": "Religious",
    "description": "Religious"
  },
  "WD19": {
    "title": "Self Employed",
    "description": "Self Employed"
  },
  "WD20": {
    "title": "Financial",
    "description": "Financial"
  }
} as const;
