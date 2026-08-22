import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const AboutCollege = () => {
    return (
        <View style={styles.container}>

            <ScrollView>

                {/* College Header */}
                <View style={styles.header}>
                    <Text style={styles.collegeName}>
                        Latthe Education Society's
                    </Text>

                    <Text style={styles.polytechnic}>
                        Polytechnic, Sangli
                    </Text>

                    <Text style={styles.location}>
                        Sangli, Maharashtra
                    </Text>
                </View>

                {/* About College */}
                <View style={styles.card}>
                    <Text style={styles.heading}>About College</Text>

                    <Text style={styles.text}>
                        Latthe Education Society's Polytechnic is an educational
                        institute located in Sangli, Maharashtra. The institute
                        provides diploma-level technical education to students.
                    </Text>
                </View>

                {/* Education */}
                <View style={styles.card}>
                    <Text style={styles.heading}>Education</Text>

                    <Text style={styles.text}>
                        The college focuses on providing students with technical
                        knowledge as well as practical skills required for their
                        future careers.
                    </Text>
                </View>

                {/* Departments */}
                <View style={styles.card}>
                    <Text style={styles.heading}>Departments</Text>

                    <Text style={styles.text}>
                        • Computer Science & Engineering{'\n'}
                        • Information Technology{'\n'}
                        • Mechanical Engineering{'\n'}
                        • Civil Engineering{'\n'}
                        • Electrical Engineering
                    </Text>
                </View>

                {/* Facilities */}
                <View style={styles.card}>
                    <Text style={styles.heading}>Facilities</Text>

                    <Text style={styles.text}>
                        The college provides classrooms, laboratories, library,
                        computer facilities, workshops, and other resources to
                        support students in their education.
                    </Text>
                </View>

                {/* Practical Learning */}
                <View style={styles.card}>
                    <Text style={styles.heading}>Practical Learning</Text>

                    <Text style={styles.text}>
                        Students are encouraged to learn through practical sessions,
                        laboratory experiments, projects, and technical activities.
                        This helps them understand concepts better.
                    </Text>
                </View>

                {/* Student Activities */}
                <View style={styles.card}>
                    <Text style={styles.heading}>Student Activities</Text>

                    <Text style={styles.text}>
                        Students can participate in technical events, workshops,
                        seminars, sports, cultural programs, and various
                        extracurricular activities.
                    </Text>
                </View>

                {/* Projects */}
                <View style={styles.card}>
                    <Text style={styles.heading}>Projects</Text>

                    <Text style={styles.text}>
                        Diploma students work on academic projects that help them
                        apply their technical knowledge to practical and
                        real-world problems.
                    </Text>
                </View>

                {/* Career */}
                <View style={styles.card}>
                    <Text style={styles.heading}>Career Development</Text>

                    <Text style={styles.text}>
                        The institute helps students prepare for higher education,
                        internships, placements, and technical careers by
                        developing their professional skills.
                    </Text>
                </View>

                {/* Location */}
                <View style={styles.card}>
                    <Text style={styles.heading}>Location</Text>

                    <Text style={styles.text}>
                        The institute is situated in Sangli, Maharashtra. Its
                        location provides students with access to educational
                        resources and opportunities in the region.
                    </Text>
                </View>

                {/* Conclusion */}
                <View style={styles.card}>
                    <Text style={styles.heading}>Our Goal</Text>

                    <Text style={styles.text}>
                        The main goal of the institute is to provide quality
                        technical education and develop skilled, confident,
                        responsible, and industry-ready students.
                    </Text>
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Latthe Education Society's Polytechnic
                    </Text>

                    <Text>Sangli, Maharashtra</Text>
                </View>

            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F3F6FA',
    },

    header: {
        backgroundColor: '#3949AB',
        margin: 15,
        padding: 25,
        borderRadius: 15,
        alignItems: 'center',
    },

    collegeName: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    polytechnic: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
    },

    location: {
        color: '#E8EAF6',
        marginTop: 8,
        fontSize: 15,
    },

    card: {
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginBottom: 12,
        padding: 18,
        borderRadius: 12,
        elevation: 3,
    },

    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3949AB',
        marginBottom: 8,
    },

    text: {
        fontSize: 15,
        lineHeight: 23,
        color: '#333',
    },

    footer: {
        alignItems: 'center',
        padding: 25,
    },

    footerText: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
    },

});

export default AboutCollege;