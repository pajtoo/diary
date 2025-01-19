package org.example.diary.controller;

import org.example.diary.dto.EntryDTO;
import org.example.diary.service.EntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/entry")
public class EntryController {

    @Autowired
    public EntryController(EntryService entryService) {
        this.entryService = entryService;
    }

    private final EntryService entryService;

    @GetMapping("/index")
    public List<EntryDTO> getEntries() {
        return entryService.getEntries();
    }

    @PostMapping("/create")
    public EntryDTO createEntry(@RequestBody EntryDTO entryDTO) {
        return entryService.createEntry(entryDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteEntry(@PathVariable long id) {
        entryService.deleteEntry(id);
    }
}
