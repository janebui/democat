// Created by Jane Bui. Last updated: 12/10/19

const governor = {
    position: "Governor",
    name: "Gavin Newsom",
    locality: "CA",
    result: true,
    description: "This former San Francisco mayor gained national attention for his support of gay marriage 14 years ago. He is endorsed by California’s current governor Jerry Brown, who is well-loved and leaves big shoes to fill."
}

const lieuGov = {
    position: "Lieutenant Governor",
    name: "Eleni Kounalakis",
    locality: "CA",
    result: true,
    description: "Eleni Kounalakis supports affordable higher education, universal healthcare, and protecting the environment."
}

const secState = {
    position: "Secretary of State",
    name: "Alex Padilla",
    locality: "CA",
    result: true,
    description: "An MIT Engineering graduate and current CA Secretary of State, Alex Padilla has done much to increase voter registration and participation. He is endorsed by Gov. Jerry Brown, Sen. Dianne Feinstein, California Democratic Party, California Labor Federation, and Planned Parenthood."
}

const stateController = {
    position: "State Controller",
    name: "Betty Yee",
    locality: "CA",
    result: true,
    description: ""
}

const treasurer = {
    position: "Treasurer",
    name: "Fiona Ma",
    locality: "CA",
    result: true,
    description: ""
}

const AG = {
    position: "Attorney General",
    name: "Xavier Becerra",
    locality: "CA",
    result: true,
    description: "Xavier Becerra, the incumbent attorney general for CA with a JD from Stanford Law School, has done a great job of defending us against Trump. He has filed 28 lawsuits against the Trump administration, more than any state general attorney in America. We will vote for Becerra to continue being a thorn in Trump’s side."
}

const commissioner = {
    position: "Insurance Commissioner",
    name: "Ricardo Lara",
    locality: "CA",
    result: true,
    description: ""
}

const senator = {
    position: "Senate",
    name: "Dianne Feinstein",
    locality: "CA",
    result: true,
    description: ""
}

const superintendent = {
    position: "State Superintendent of Public Instruction",
    name: "Tony Thurmond",
    locality: "CA",
    result: true,
    description: ""
}

const house = [
    {
        name: "Audrey Denney",
        locality: "Northeastern California",
        result: false,
        zip: [
             89439, 95568, 95602, 95603, 95648, 95658, 95681, 95701, 95703, 95713, 95714, 95715, 95717, 95722, 95728, 95736, 95901, 95910, 95914, 95915, 95916, 95917, 95920, 95922, 95923, 95926, 95928, 95930, 95934, 95936, 95938, 95941, 95942, 95943, 95944, 95945, 95946, 95947, 95948, 95949, 95951, 95954, 95956, 95959, 95960, 95963, 95965, 95966, 95968, 95969, 95970, 95971, 95973, 95974, 95975, 95977, 95978, 95981, 95983, 95984, 95986, 95988, 96001, 96002, 96003, 96006, 96007, 96008, 96009, 96011, 96013, 96014, 96015, 96016, 96017, 96019, 96020, 96021, 96022, 96023, 96025, 96027, 96028, 96029, 96031, 96032, 96033, 96034, 96035, 96037, 96038, 96039, 96040, 96044, 96047, 96049, 96050, 96051, 96054, 96055, 96056, 96057, 96058, 96059, 96061, 96062, 96063, 96064, 96065, 96067, 96068, 96069, 96071, 96073, 96074, 96075, 96076, 96080, 96084, 96085, 96086, 96087, 96088, 96090, 96092, 96094, 96096, 96097, 96101, 96103, 96104, 96105, 96106, 96108, 96109, 96110, 96111, 96112, 96113, 96114, 96115, 96116, 96117, 96118, 96119, 96121, 96122, 96123, 96124, 96125, 96126, 96128, 96129, 96130, 96132, 96134, 96135, 96136, 96137, 96161, 97520, 97632, 97633, 97635
        ]
    },
    {
        name: "Jared Huffman",
        locality: "Northern coast (San Rafael, Petaluma, Novato, Windsor, Healdsburg, Ukiah, Fort Bragg, Fortuna, Eureka, Arcata, McKinleyville, and Crescent City)",
        result: true,
        zip: [    
            94515, 94901, 94903, 94904, 94920, 94922, 94923, 94924, 94925, 94929, 94930, 94931, 94933, 94937, 94938, 94939, 94940, 94941, 94945, 94946, 94947, 94949, 94950, 94951, 94952, 94954, 94956, 94957, 94960, 94963, 94964, 94965, 94970, 94971, 94972, 94973, 95401, 95403, 95404, 95407, 95410, 95412, 95415, 95417, 95420, 95421, 95425, 95427, 95428, 95429, 95430, 95432, 95436, 95437, 95441, 95444, 95445, 95446, 95448, 95449, 95450, 95454, 95456, 95459, 95460, 95462, 95463, 95465, 95466, 95468, 95469, 95470, 95471, 95472, 95482, 95486, 95488, 95490, 95492, 95494, 95497, 95501, 95503, 95511, 95514, 95519, 95521, 95524, 95525, 95526, 95527, 95528, 95531, 95536, 95537, 95540, 95542, 95543, 95545, 95546, 95547, 95548, 95549, 95550, 95551, 95552, 95553, 95554, 95555, 95556, 95558, 95559, 95560, 95562, 95563, 95564, 95565, 95567, 95569, 95570, 95571, 95573, 95585, 95587, 95589, 95595, 96010, 96024, 96041, 96046, 96048, 96052, 96076, 96091, 96093
        ]
    },
    {
        name: "John Garamendi",
        locality: "Colusa, Sutter, and Yuba counties plus portions of Glenn, Lake, Sacramento, Solano, and Yolo counties",
        result: true,
        zip: [
            94510, 94512, 94533, 94534, 94535, 94571, 94585, 94591, 95422, 95423, 95443, 95451, 95453, 95457, 95458, 95464, 95469, 95485, 95493, 95605, 95606, 95607, 95612, 95615, 95616, 95618, 95620, 95625, 95626, 95627, 95632, 95637, 95639, 95641, 95645, 95648, 95652, 95653, 95659, 95668, 95673, 95674, 95679, 95680, 95681, 95687, 95688, 95690, 95691, 95692, 95694, 95695, 95697, 95698, 95757, 95758, 95776, 95823, 95831, 95832, 95834, 95835, 95837, 95843, 95901, 95903, 95912, 95914, 95918, 95919, 95920, 95922, 95925, 95930, 95932, 95935, 95937, 95939, 95941, 95948, 95950, 95951, 95953, 95955, 95957, 95960, 95961, 95962, 95963, 95966, 95970, 95977, 95979, 95981, 95982, 95987, 95988, 95991, 95993
        ]
    }
]