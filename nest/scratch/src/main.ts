import { Get, Module, Controller} from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

@Controller()
class AppController {
    @Get()
    getRootRoute(){
        return 'This is from the appController'
    }
}

@Module({
    controllers: [AppController]
})

class AppModule {}

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    await app.listen(3005)
}

bootstrap()