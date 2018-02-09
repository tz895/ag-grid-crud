package tianyou.com.demo.repositories;

import tianyou.com.demo.Model.Sport;
import org.springframework.data.repository.CrudRepository;

public interface SportRepository extends CrudRepository<Sport, Long> {
    Sport findByName(String name);
}
