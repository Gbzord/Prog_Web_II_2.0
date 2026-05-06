import type { FastifyInstance } from 'fastify';
import { ContactUseCase } from '../usecases/contact.usercases.js';
import { ContactRepositoryPrisma } from '../repositories/contacts.repository.js';
import { UserRepositoryPrisma } from '../repositories/user.repository.js';
import type { ContactCreate } from '../interfaces/contact.interface.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

/**
 * A função contactRoutes define as rotas para o recurso de contatos.
 * Utiliza injeção de dependência para instanciar o repositório e o use case.
 */
export async function contactRoutes(fastify: FastifyInstance) {
    // Cria instâncias dos repositórios e do use case
    const contactRepository = new ContactRepositoryPrisma();
    const userRepository = new UserRepositoryPrisma();
    const contactUseCase = new ContactUseCase(contactRepository, userRepository);

      fastify.addHook('preHandler', authMiddleware);


    // Rota para criação de um novo contato
    fastify.post<{ Body: ContactCreate }>('/', async (request, reply) => {
        const { name, email, phone } = request.body;
        const userEmail = request.headers['email'] as string;
        try {
            const data = await contactUseCase.create({
                name,
                email,
                phone,
                userEmail
            });

            return reply.status(201).send(data);
        } catch (error) {
            // Em caso de erro (ex: contato já existe), retorna o erro para o cliente
            reply.send(error);
        }
    });

    // Rota de teste para listar ou verificar status do recurso de contatos
    fastify.get('/', async (request, reply) => {
        return reply.send({ message: 'Contact route is active' });
    });

    fastify.delete('/:id', async (request, reply) => {
        const { id } = request.params as { id: string };
        await contactRepository.delete(id);
        return reply.status(204).send();
});
}