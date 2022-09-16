import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';

export interface GameCardProps {
    id: string;
    title: string;
    _count: {
        Ad: number
    };
    bannerUrl: string;
}

interface Props extends TouchableOpacityProps {
    data: GameCardProps
}

export function GameCard({ data, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container}>

            <ImageBackground
                style={styles.cover}
                source={{uri: data.bannerUrl}}
            >

                <LinearGradient
                    style={styles.footer}
                    colors={THEME.COLORS.FOOTER}
                >
                    <Text style={styles.name}>
                        {data.title}
                    </Text>

                    <Text style={styles.ads}>
                        {data._count.Ad} anúncios
                    </Text>

                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
}